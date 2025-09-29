from fastapi import FastAPI, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import logging

from .send_contact_manager import send_email

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://daemonkerrigan.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    subject: str
    message: str

@app.get("/")
async def read_root():
    return {"message": "Hello World"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

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
        
        send_email(
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
        # Re-raise HTTP exceptions
        raise
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        logger.error(f"Error type: {type(e).__name__}")
        raise HTTPException(status_code=500, detail=f"Email failed: {str(e)}")

    return {"message": "Contact form submitted successfully", "data": form}

@app.post("/contact")
async def submit_contact_form(form: ContactForm):
    return await contact_form_handler(form)

@app.post("/api/contact") 
async def submit_contact_form_api(form: ContactForm):
    return await contact_form_handler(form)

# Add OPTIONS handlers for CORS preflight
@app.options("/contact")
async def contact_options():
    return {"message": "OK"}

@app.options("/api/contact")
async def api_contact_options():
    return {"message": "OK"}