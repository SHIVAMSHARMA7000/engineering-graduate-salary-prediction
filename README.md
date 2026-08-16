# 🎓 Engineering Graduate Salary Prediction

An end-to-end Machine Learning application that predicts the expected salary of an engineering graduate based on academic performance, aptitude scores, educational background, college information, domain skills, and personality traits.

The trained Machine Learning model is integrated with a **FastAPI REST API** and connected to a **HTML, CSS and JavaScript frontend** for real-time salary prediction.

---

## 🚀 Project Overview

The objective of this project is to build a complete Machine Learning application starting from data analysis and model development to API integration and frontend deployment.

The application takes graduate information from the user and predicts the expected salary using a trained **Ridge Regression** model.

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
Salary Prediction
```

---

# 🧠 Machine Learning

## Model Used

**Ridge Regression**

Ridge Regression was selected as the final model after experimenting with different regression approaches during model development.

The salary target was transformed using a logarithmic transformation during training:

```python
y_log = np.log1p(y)
```

During prediction, the output is converted back to the original salary scale:

```python
predicted_salary = np.expm1(prediction)
```

This transformation helps reduce the impact of extreme salary values and makes the target distribution more suitable for regression modeling.

---

# 📊 Features Used

The model uses academic, aptitude, domain and personality-related features.

## Academic & Personal Features

- Gender
- Degree
- Specialization
- College State
- 10th Board
- 12th Board
- College Tier
- College City Tier
- Graduation Year
- Age

## Aptitude & Domain Features

- Overall Score
- English Score
- Logical Score
- Quantitative Score
- Domain Score
- Best Domain
- Best Domain Score

## Personality Features

- Conscientiousness
- Agreeableness
- Extraversion
- Neuroticism
- Openness to Experience

---

# 🔄 Prediction Pipeline

When a user submits the form, the following pipeline is executed:

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

# ⚙️ Tech Stack

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

## Tools

- Jupyter Notebook
- VS Code
- Git
- GitHub

---

# 📁 Project Structure

```text
Engineering-Graduate-Salary-Prediction/
│
├── main.py
├── requirements.txt
├── README.md
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
    └── salary_prediction.ipynb
```

---

# 🔌 FastAPI

The trained Machine Learning model is served through a REST API using FastAPI.

## Available Endpoints

### Home

```http
GET /
```

Returns a message confirming that the API is running.

Example response:

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

# 🖥️ Frontend

The project includes a responsive web interface built using HTML, CSS and JavaScript.

The frontend allows users to enter:

- Personal information
- Academic information
- College information
- Aptitude scores
- Domain scores
- Personality scores

The categorical features are provided through dropdown menus to reduce invalid inputs.

The frontend communicates with the FastAPI backend using JavaScript `fetch()` and JSON requests.

---

# 💾 Machine Learning Artifacts

The trained Machine Learning components are stored inside the `models/` directory.

### `ridge_model.pkl`

Contains the trained Ridge Regression model.

### `preprocessor.pkl`

Contains the preprocessing pipeline used during model training.

The same preprocessing pipeline is used during inference so that new user inputs are transformed in the same way as the training data.

---

# 🛠️ Run Locally

## 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

Move into the project directory:

```bash
cd Engineering-Graduate-Salary-Prediction
```

---

## 2. Create Virtual Environment

For Windows:

```bash
python -m venv venv
```

Activate the virtual environment:

```bash
venv\Scripts\activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Start FastAPI Server

```bash
uvicorn main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

---

# 📚 API Documentation

FastAPI automatically generates interactive API documentation using Swagger UI.

Open:

```text
http://127.0.0.1:8000/docs
```

The `/predict` endpoint can be tested directly from the Swagger interface.

---

# 🌐 Run the Frontend

Open the `frontend` folder in VS Code.

Run:

```text
index.html
```

using **Live Server**.

The frontend sends prediction requests to the FastAPI backend.

During local development, the JavaScript frontend communicates with:

```text
http://127.0.0.1:8000/predict
```

After deployment, this URL should be replaced with the deployed FastAPI backend URL.

---

# 🔐 CORS

Since the frontend and backend may run on different origins, CORS middleware is configured in FastAPI.

Example:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
```

For production deployment, it is recommended to replace `*` with the actual frontend domain.

---

# 📦 Dataset

The original dataset is not included in this repository.

The dataset contains information related to engineering graduates, including academic performance, aptitude scores, domain information, college details and personality traits.

The dataset is excluded from the repository to keep the project lightweight and avoid redistributing the original dataset.

The complete data analysis and model development workflow can be found in the Jupyter Notebook.

---

# 📈 Machine Learning Workflow

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
10. Model Training
11. Model Evaluation
12. Target Transformation
13. Model Selection
14. Model Serialization

---

# 🚀 Deployment

The application can be deployed as two separate components.

## Backend

Possible platforms:

- Render
- Railway
- AWS
- Azure

The FastAPI backend can be started in production using:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

## Frontend

Possible platforms:

- Vercel
- Netlify
- GitHub Pages

After deploying the FastAPI backend, update the API URL inside:

```text
frontend/script.js
```

Example:

```javascript
const response = await fetch(
    "https://your-api-domain.com/predict",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
);
```

---

# 🔮 Future Improvements

- Experiment with Random Forest and XGBoost
- Hyperparameter tuning
- Improve prediction performance
- Add salary range prediction
- Add prediction confidence/uncertainty
- Add data visualizations
- Add database integration
- Add user authentication
- Add model monitoring
- Dockerize the application
- Add CI/CD pipeline
- Deploy the complete application

---

# 🎯 Key Learning Outcomes

This project provided hands-on experience with:

- End-to-end Machine Learning workflow
- Exploratory Data Analysis
- Data preprocessing
- Feature engineering
- Regression modeling
- Target transformation
- Model evaluation
- Model serialization using Joblib
- REST API development using FastAPI
- Pydantic data validation
- Frontend-backend integration
- CORS configuration
- Swagger API testing
- Git and GitHub
- Machine Learning deployment

---

# 👨‍💻 Author

**Shivam Sharma**

B.Tech CSE (AI/ML) Student

### Areas of Interest

- Machine Learning
- Data Science
- Backend Development
- FastAPI
- AI/ML Deployment

---

## ⭐ Project

If you found this project interesting, feel free to explore the repository.