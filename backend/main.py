import os
import motor.motor_asyncio
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq

app = FastAPI()

# 1. CORS SETUP
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GROQ_KEY = os.getenv("GROQ_API_KEY")
MONGO_URI = "mongodb://localhost:27017/portfolio_db"


groq_client = Groq(api_key=GROQ_KEY)
db_client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = db_client.portfolio_db


class ChatRequest(BaseModel):
    message: str

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str


RESUME_DATA = """
Name: Vishal Tiwari (Vish)
Education: Final Year B.Sc. IT Student at Thakur College of Science and Commerce.
Technical Skills: MERN Stack Developer (MongoDB, Express, React, Node).
Projects: AgencyMaster (AI CRM), IoT Dashboard, Railway Announcement System.
Bio: Manages a petrol pump and launching brand 'Vistora'.
"""


@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        await db.chats.insert_one({"user_msg": request.message})
        completion = groq_client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=[
                {"role": "system", "content": f"You are the AI for Vish. Resume: {RESUME_DATA}"},
                {"role": "user", "content": request.message}
            ]
        )
        ai_reply = completion.choices[0].message.content
        return {"response": ai_reply}
    except Exception as e:
        print(f"--- CHAT ERROR: {str(e)} ---")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/contact")
async def contact_endpoint(request: ContactRequest):
    try:
        lead_data = request.dict()
        lead_data["timestamp"] = "2026-02-23"
        await db.leads.insert_one(lead_data)
        print(f"✅ New Lead Received from: {request.name}")
        return {"status": "success", "message": "Lead saved to Compass"}
    except Exception as e:
        print(f"❌ Failed to save lead: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")


if __name__ == "__main__":
    import uvicorn
    print("--- SYSTEM STARTUP ---")
    print("✅ AI Chat & Contact Form are now LIVE")
    print("----------------------")
    uvicorn.run(app, host="0.0.0.0", port=8000)