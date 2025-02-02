from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pymongo import MongoClient

# Connect to Azure Cosmos DB (MongoDB API)
client = MongoClient("YOUR_COSMOS_DB_CONNECTION_STRING")
db = client["crime_reports_db"]
collection = db["reports"]

# FastAPI app
app = FastAPI()

# Data Model
class CrimeReport(BaseModel):
    crimeType: str
    description: str
    location: str

# Endpoint: Submit Crime Report
@app.post("/submit-report/")
async def submit_report(report: CrimeReport):
    report_dict = report.dict()
    result = collection.insert_one(report_dict)
    if result.inserted_id:
        return {"message": "Report submitted successfully"}
    raise HTTPException(status_code=500, detail="Failed to submit report")

# Endpoint: Fetch Reports
@app.get("/reports/")
async def get_reports():
    reports = list(collection.find({}, {"_id": 0}))  # Exclude MongoDB's `_id`
    return reports