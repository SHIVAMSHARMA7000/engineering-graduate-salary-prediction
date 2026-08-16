from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd 
import numpy as np 
import joblib
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title='Engineering Graduate Salary Prediction API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

model = joblib.load(
    BASE_DIR / "models" / "ridge_model.pkl"
)

preprocessor = joblib.load(
    BASE_DIR / "models" / "preprocessor.pkl"
)


class Student(BaseModel):
    Gender: str
    Degree: str
    Specialization: str
    CollegeState: str
    board10: str
    board12: str
    best_domain_name: str

    score: float
    English: float
    Logical: float
    Quant: float
    Domain: float
    best_domain_score: float

    CollegeTier: int
    CollegeCityTier: int
    GraduationYear: int
    age: float

    conscientiousness: float
    agreeableness: float
    extraversion: float
    nueroticism: float
    openess_to_experience: float


@app.get('/')
def home():
    return{
        "message":"Enginnering Graduate Salary Predcition API"
    }

@app.post("/predict")
def predict_salary(student:Student):
    data = pd.DataFrame([{
        "Gender": student.Gender,
        "Degree": student.Degree,
        "Specialization": student.Specialization,
        "CollegeState": student.CollegeState,
        "10board_grouped": student.board10,
        "12board_grouped": student.board12,
        "best_domain_name": student.best_domain_name,

        "score": student.score,
        "English": student.English,
        "Logical": student.Logical,
        "Quant": student.Quant,
        "Domain": student.Domain,
        "best_domain_score": student.best_domain_score,

        "CollegeTier": student.CollegeTier,
        "CollegeCityTier": student.CollegeCityTier,
        "GraduationYear": student.GraduationYear,
        "age": student.age,

        "conscientiousness": student.conscientiousness,
        "agreeableness": student.agreeableness,
        "extraversion": student.extraversion,
        "nueroticism": student.nueroticism,
        "openess_to_experience": student.openess_to_experience
    }])

    transformed_data = preprocessor.transform(data)
    prediction_log = model.predict(transformed_data)
    predicted_salary = np.expm1(prediction_log[0])

    return {
        "predicted_salary": round(float(predicted_salary), 2)
    }  

