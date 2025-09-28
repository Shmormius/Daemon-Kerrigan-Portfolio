from fastapi import FastAPI, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://daemonkerrigan.com"], # change to domain in production
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

@app.post("/contact")
async def submit_contact_form(form: ContactForm):
    return {"message": "Contact form submitted successfully", "data": form} 