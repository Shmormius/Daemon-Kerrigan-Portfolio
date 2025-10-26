from fastapi import FastAPI, HTTPException, Form, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import logging
from typing import Optional
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

from .send_contact_manager import send_email
from .ai_chatbot_manager import BedrockChatbotManager

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

def get_client_ip(request: Request) -> str:
    """Get real client IP, handling proxies properly""" 
    forwarded_for = request.headers.get("X-Forwarded-For")
    if forwarded_for:
        client_ip = forwarded_for.split(",")[0].strip()
        if client_ip and len(client_ip) <= 45: 
            return client_ip
    
    real_ip = request.headers.get("X-Real-IP")
    if real_ip and len(real_ip) <= 45:
        return real_ip
    
    # Fallback to direct connection IP
    return request.client.host if request.client else "unknown"

limiter = Limiter(key_func=get_client_ip)

app = FastAPI()

# Add slowapi middleware and rate limiter to app state
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://daemonkerrigan.com",
        "https://daemon-frontend-930300202557.us-central1.run.app"  # Update with your actual URL
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Initialize Bedrock manager
try:
    bedrock_manager = BedrockChatbotManager()
    logger.info("Bedrock manager initialized successfully")
except Exception as e:
    logger.error(f"Failed to initialize Bedrock manager: {e}")
    bedrock_manager = None

class ContactForm(BaseModel):
    name: str
    subject: str
    message: str

class ChatMessage(BaseModel):
    message: str
    session_id: Optional[str] = None

@app.get("/")
@limiter.limit("100/minute")  # Basic rate limit for root endpoint
async def read_root(request: Request):
    return {"message": "Hello World"}

@app.get("/health")
@limiter.limit("200/minute")  # Higher limit for health checks
async def health_check(request: Request):
    return {"status": "healthy"}

@app.post("/api/chat")
@limiter.limit("10/minute")  # Strict limit for expensive AI operations
async def chat_with_ai(request: Request, chat_request: ChatMessage):
    """
    Chat with the AI assistant using AWS Bedrock Agent
    Rate limited to 10 requests per minute per IP
    """
    if not bedrock_manager:
        raise HTTPException(status_code=500, detail="AI service is not available")
    
    try:
        logger.info(f"Processing chat request: {chat_request.message[:50]}...")
        
        result = await bedrock_manager.chat_with_agent(
            message=chat_request.message,
            session_id=chat_request.session_id
        )
        
        if result["success"]:
            return {
                "response": result["response"],
                "session_id": result["session_id"]
            }
        else:
            logger.error(f"Chat error: {result.get('error', 'Unknown error')}")
            raise HTTPException(
                status_code=500, 
                detail=result.get("response", "AI service error")
            )
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in chat endpoint: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

async def contact_form_handler(form: ContactForm):
    """Shared contact form logic"""
    try:
        logger.info(f"Processing contact form for: {form.name}")
        
        sender_email = os.getenv("SENDER_EMAIL")
        receiver_email = os.getenv("RECEIVER_EMAIL")
        email_password = os.getenv("EMAIL_PASSWORD")
        smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))

        logger.info(f"Email config - Server: {smtp_server}, Port: {smtp_port}")
        logger.info(f"Sender: {sender_email}, Receiver: {receiver_email}")

        # Validate required environment variables
        if not sender_email:
            logger.error("SENDER_EMAIL not set")
            raise HTTPException(status_code=500, detail="SENDER_EMAIL not configured")
        if not receiver_email:
            logger.error("RECEIVER_EMAIL not set")
            raise HTTPException(status_code=500, detail="RECEIVER_EMAIL not configured")
        if not email_password:
            logger.error("EMAIL_PASSWORD not set")
            raise HTTPException(status_code=500, detail="EMAIL_PASSWORD not configured")

        logger.info("Attempting to send email...")
        
        await send_email(
            sender_email,
            receiver_email,
            email_password,
            smtp_server,
            smtp_port,
            form.name,
            form.subject,
            form.message
        )
        
        logger.info("Email sent successfully")

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        logger.error(f"Error type: {type(e).__name__}")
        raise HTTPException(status_code=500, detail=f"Email failed: {str(e)}")

    return {"message": "Contact form submitted successfully", "data": form}

@app.post("/contact")
@limiter.limit("5/minute")  
async def submit_contact_form(request: Request, form: ContactForm):
    return await contact_form_handler(form)

@app.post("/api/contact") 
@limiter.limit("5/minute")  
async def submit_contact_form_api(request: Request, form: ContactForm):
    return await contact_form_handler(form)

@app.options("/contact")
@limiter.limit("100/minute")
async def contact_options(request: Request):
    return {"message": "OK"}

@app.options("/api/contact")
@limiter.limit("100/minute")
async def api_contact_options(request: Request):
    return {"message": "OK"}

@app.options("/api/chat")
@limiter.limit("100/minute")
async def chat_options(request: Request):
    return {"message": "OK"}

@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    response = _rate_limit_exceeded_handler(request, exc)
    
    response.headers["X-RateLimit-Limit"] = str(exc.detail.split("per")[0].strip())
    response.headers["X-RateLimit-Window"] = str(exc.detail.split("per")[1].strip())
    response.headers["Retry-After"] = "60" 
    
    client_ip = get_client_ip(request)
    logger.warning(f"Rate limit exceeded for {client_ip} on {request.url.path}: {exc.detail}")
    
    return response

@app.middleware("http")
async def security_headers(request: Request, call_next):
    response = await call_next(request)
    
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    
    return response