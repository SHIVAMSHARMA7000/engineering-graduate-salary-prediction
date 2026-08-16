# 🎓 Engineering Graduate Salary Prediction

An end-to-end Machine Learning application that predicts the expected salary of an engineering graduate based on academic performance, aptitude scores, educational background, college information, domain skills, and personality traits.

The project includes a complete Machine Learning pipeline, FastAPI REST API, and an interactive HTML/CSS/JavaScript frontend.

---

## 🚀 Live Demo

### 🌐 Web Application

**[Engineering Graduate Salary Predictor](https://engineering-graduate-salary-predict.vercel.app/)**

The frontend is deployed on Vercel and communicates with the deployed FastAPI backend for real-time salary predictions.

---

## 📌 Project Overview

The goal of this project is to build an end-to-end Machine Learning application that can estimate the expected salary of an engineering graduate using different academic, aptitude, domain and personality features.

The project covers the complete workflow from data analysis and model development to API development and cloud deployment.

### Complete Project Flow

```text
Dataset
   ↓
Data Cleaning
   ↓
Exploratory Data Analysis
   ↓
Feature Engineering
   ↓
Data Preprocessing
   ↓
Model Training
   ↓
Model Evaluation
   ↓
Model Serialization
   ↓
FastAPI REST API
   ↓
Frontend Integration
   ↓
Cloud Deployment
   ↓
Salary Prediction
```

---

# 🧠 Machine Learning

## Model Used

The final Machine Learning model used in this project is:

**Ridge Regression**

Ridge Regression was selected as the final model after experimenting with different regression approaches during the model development process.

The salary target was transformed using a logarithmic transformation:

```python
y_log = np.log1p(y)
```

During prediction, the output is converted back to the original salary scale:

```python
predicted_salary = np.expm1(prediction)
```

This transformation helps reduce the effect of extreme salary values and makes the target distribution more suitable for regression modeling.

---

# 📊 Features Used

The model uses academic, aptitude, domain and personality-related features.

## 👤 Personal Information

- Gender
- Age
- Graduation Year
- College State

## 🎓 Education Information

- Degree
- Specialization
- 10th Board
- 12th Board
- College Tier
- College City Tier

## 📊 Aptitude & Domain Information

- Overall Score
- English Score
- Logical Score
- Quantitative Score
- Domain Score
- Best Domain
- Best Domain Score

## 🧠 Personality Information

- Conscientiousness
- Agreeableness
- Extraversion
- Neuroticism
- Openness to Experience

---

# 🔄 Prediction Pipeline

When a user submits the form, the following process takes place:

```text
User Input
    ↓
HTML Form
    ↓
JavaScript
    ↓
POST /predict
    ↓
FastAPI
    ↓
Pydantic Validation
    ↓
Preprocessing Pipeline
    ↓
Ridge Regression Model
    ↓
Inverse Log Transformation
    ↓
Predicted Salary
    ↓
Frontend Result
```

---

# 🛠️ Tech Stack

## Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Ridge Regression
- Joblib

## Backend

- FastAPI
- Pydantic
- Uvicorn

## Frontend

- HTML5
- CSS3
- JavaScript

## Deployment

- GitHub
- Render
- Vercel

## Development Tools

- VS Code
- Jupyter Notebook
- Git

---

# 📁 Project Structure

```text
Engineering-Graduate-Salary-Prediction/
│
├── main.py
├── README.md
├── requirements.txt
├── .gitignore
│
├── models/
│   ├── ridge_model.pkl
│   └── preprocessor.pkl
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── notebooks/
    └── Engineering_graduate_salary_prediction.ipynb
```

---

# 🔌 FastAPI

The trained Machine Learning model is served through a REST API using FastAPI.

## API Endpoints

### Home

```http
GET /
```

Returns a message confirming that the API is running.

Example:

```json
{
    "message": "Engineering Graduate Salary Prediction API"
}
```

---

### Predict Salary

```http
POST /predict
```

Accepts student information in JSON format and returns the predicted salary.

### Example Request

```json
{
    "Gender": "m",
    "Degree": "B.Tech/B.E.",
    "Specialization": "computer science & engineering",
    "CollegeState": "Uttar Pradesh",
    "board10": "CBSE",
    "board12": "CBSE",
    "best_domain_name": "ComputerScience",
    "score": 78.5,
    "English": 75,
    "Logical": 82,
    "Quant": 76,
    "Domain": 85,
    "best_domain_score": 88,
    "CollegeTier": 2,
    "CollegeCityTier": 1,
    "GraduationYear": 2024,
    "age": 22,
    "conscientiousness": 0.5,
    "agreeableness": 0.6,
    "extraversion": 0.4,
    "nueroticism": -0.2,
    "openess_to_experience": 0.7
}
```

### Example Response

```json
{
    "predicted_salary": 2373020.02
}
```

---

# 📚 API Documentation

FastAPI automatically provides interactive API documentation through Swagger UI.

The deployed backend can be tested using the `/docs` endpoint.

```text
https://YOUR-RENDER-URL.onrender.com/docs
```

Swagger allows the `/predict` endpoint to be tested directly by entering JSON input.

---

# 🖥️ Frontend

The project includes a responsive web interface developed using HTML, CSS and JavaScript.

The frontend provides dropdown menus and input fields for:

- Personal information
- Academic information
- College information
- Aptitude scores
- Domain scores
- Personality traits

The frontend collects the user input and sends it to the FastAPI backend using JavaScript `fetch()`.

The predicted salary is then displayed dynamically on the webpage.

---

# 🌐 Deployment Architecture

The application is deployed using separate frontend and backend services.

```text
                    USER
                     │
                     ▼
        ┌─────────────────────────┐
        │      Vercel             │
        │   HTML + CSS + JS       │
        └────────────┬────────────┘
                     │
                     │ POST /predict
                     ▼
        ┌─────────────────────────┐
        │       Render            │
        │      FastAPI API        │
        └────────────┬────────────┘
                     │
                     ▼
        ┌─────────────────────────┐
        │     Preprocessor        │
        │       .pkl              │
        └────────────┬────────────┘
                     │
                     ▼
        ┌─────────────────────────┐
        │    Ridge Regression     │
        │        Model            │
        └────────────┬────────────┘
                     │
                     ▼
              Predicted Salary
                     │
                     ▼
              Frontend Result
```

---

# ☁️ Deployment

## Frontend

The frontend is deployed on:

**Vercel**

Live application:

https://engineering-graduate-salary-predict.vercel.app/

## Backend

The FastAPI backend is deployed on:

**Render**

The backend exposes the `/predict` REST API used by the frontend.

---

# 💾 Machine Learning Artifacts

The trained Machine Learning components are stored inside the `models/` directory.

### `ridge_model.pkl`

Contains the trained Ridge Regression model.

### `preprocessor.pkl`

Contains the preprocessing pipeline used during model training.

The same preprocessing pipeline is used during inference to ensure that new user inputs are transformed consistently with the training data.

---

# 📦 Dataset

The original dataset is not included in the repository.

The dataset contains information related to engineering graduates, including:

- Academic performance
- Aptitude scores
- Domain information
- College information
- Personality traits
- Salary information

The dataset is excluded from the GitHub repository to keep the repository lightweight and avoid redistributing the original dataset.

---

# 🔬 Machine Learning Workflow

The notebook contains the complete model development process:

1. Data Loading
2. Data Understanding
3. Exploratory Data Analysis
4. Missing Value Analysis
5. Data Cleaning
6. Feature Engineering
7. Categorical Feature Processing
8. Numerical Feature Processing
9. Train-Test Split
10. Target Transformation
11. Model Training
12. Model Evaluation
13. Model Selection
14. Model Serialization
15. API Integration
16. Deployment

---

# 🧪 Example Prediction

A user can enter information such as:

```text
Gender: Male
Degree: B.Tech/B.E.
Specialization: Computer Science & Engineering
College State: Uttar Pradesh
10th Board: CBSE
12th Board: CBSE
Best Domain: ComputerScience

Overall Score: 78.5
English: 75
Logical: 82
Quant: 76
Domain: 85
Best Domain Score: 88

College Tier: 2
College City Tier: 1
Graduation Year: 2024
Age: 22

Conscientiousness: 0.5
Agreeableness: 0.6
Extraversion: 0.4
Neuroticism: -0.2
Openness to Experience: 0.7
```

The application processes these values and returns an estimated salary.

---

# 🔐 Input Validation

FastAPI uses Pydantic models to validate incoming API requests.

Example:

```python
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
```

This helps ensure that the API receives data in the expected format.

---

# 🔐 CORS

Since the frontend and backend are deployed separately, Cross-Origin Resource Sharing (CORS) is required for communication between the two services.

The FastAPI backend is configured to accept requests from the frontend.

For production environments, CORS can be restricted to the specific frontend domain.

---

# 🛠️ Run Locally

## 1. Clone the Repository

```bash
git clone https://github.com/SHIVAMSHARMA7000/engineering-graduate-salary-prediction.git
```

Move into the project directory:

```bash
cd engineering-graduate-salary-prediction
```

---

## 2. Create Virtual Environment

For Windows:

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Start FastAPI

```bash
uvicorn main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

---

## 5. Open Swagger

```text
http://127.0.0.1:8000/docs
```

Use Swagger UI to test the `/predict` endpoint.

---

# 🌐 Run Frontend Locally

Open the `frontend` folder.

```text
frontend/
├── index.html
├── style.css
└── script.js
```

The frontend can be opened using VS Code Live Server.

During local development, make sure the API URL in `script.js` points to the correct FastAPI backend.

Example:

```javascript
const response = await fetch(
    "http://127.0.0.1:8000/predict",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
);
```

For the deployed application, the frontend uses the deployed Render API URL.

---

# 📈 Model Evaluation

The project evaluates regression performance using common regression metrics such as:

- Mean Absolute Error (MAE)
- Mean Squared Error (MSE)
- Root Mean Squared Error (RMSE)
- R² Score

The complete experiments and model comparisons are available in the Jupyter Notebook.

---

# 🚀 Future Improvements

Some possible improvements for the project include:

- Hyperparameter tuning
- Experimenting with Random Forest and XGBoost
- Improving model performance
- Cross-validation
- Feature importance analysis
- Salary range prediction
- Prediction confidence/uncertainty
- Database integration
- User authentication
- Model monitoring
- Dockerization
- CI/CD pipeline
- Improved UI/UX
- Custom domain integration

---

# 🎯 Key Learning Outcomes

Through this project, I gained hands-on experience with:

- End-to-end Machine Learning workflow
- Exploratory Data Analysis
- Data preprocessing
- Feature engineering
- Regression modeling
- Target transformation
- Model evaluation
- Model serialization using Joblib
- FastAPI REST API development
- Pydantic validation
- Frontend-backend integration
- CORS
- Git and GitHub
- Cloud deployment
- API testing using Swagger
- Frontend deployment using Vercel
- Backend deployment using Render

---

# ⭐ Highlights

- ✅ End-to-end Machine Learning project
- ✅ Ridge Regression model
- ✅ Custom preprocessing pipeline
- ✅ FastAPI REST API
- ✅ Swagger API documentation
- ✅ Interactive frontend
- ✅ Frontend deployed on Vercel
- ✅ Backend deployed on Render
- ✅ Real-time prediction
- ✅ GitHub version control

---

# 👨‍💻 Author

## Shivam Sharma

B.Tech CSE (AI/ML) Student

Interested in:

- Machine Learning
- Data Science
- Artificial Intelligence
- Backend Development
- FastAPI
- Machine Learning Deployment

---

# 🔗 Project Links

### 🌐 Live Application

https://engineering-graduate-salary-predict.vercel.app/

### 💻 GitHub Repository

https://github.com/SHIVAMSHARMA7000/engineering-graduate-salary-prediction

---

## ⭐ If you found this project interesting, feel free to explore the repository and give it a star!
