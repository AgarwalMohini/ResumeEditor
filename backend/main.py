from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EnhanceRequest(BaseModel):
    section: str
    content: str

class SaveResumeRequest(BaseModel):
    resume: dict

@app.post("/ai-enhance")
async def enhance_section(data: EnhanceRequest):
    return {
        "enhanced": f"✨ Enhanced [{data.section}] content: {data.content.upper()} ✨"
    }

@app.post("/save-resume")
async def save_resume(data: SaveResumeRequest):
    with open("saved_resume.json", "w") as f:
        json.dump(data.resume, f, indent=2)
    return {"message": "Resume saved successfully!"}
