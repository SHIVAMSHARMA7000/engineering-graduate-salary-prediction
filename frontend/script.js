const form = document.getElementById("predictionForm");

const predictButton = document.getElementById("predictButton");

const resultBox = document.getElementById("result");
const salaryText = document.getElementById("salary");

const errorBox = document.getElementById("error");

const loading = document.getElementById("loading");


form.addEventListener("submit", async function (event) {

    // Prevent page reload
    event.preventDefault();


    // Hide previous result/error
    resultBox.classList.add("hidden");
    errorBox.classList.add("hidden");


    // Show loading
    loading.classList.remove("hidden");

    predictButton.disabled = true;


    // =========================
    // Collect form data
    // =========================

    const data = {

        Gender:
            document.getElementById("Gender").value,

        Degree:
            document.getElementById("Degree").value,

        Specialization:
            document.getElementById("Specialization").value,

        CollegeState:
            document.getElementById("CollegeState").value,

        board10:
            document.getElementById("board10").value,

        board12:
            document.getElementById("board12").value,

        best_domain_name:
            document.getElementById("best_domain_name").value,


        score:
            parseFloat(
                document.getElementById("score").value
            ),

        English:
            parseFloat(
                document.getElementById("English").value
            ),

        Logical:
            parseFloat(
                document.getElementById("Logical").value
            ),

        Quant:
            parseFloat(
                document.getElementById("Quant").value
            ),

        Domain:
            parseFloat(
                document.getElementById("Domain").value
            ),

        best_domain_score:
            parseFloat(
                document.getElementById("best_domain_score").value
            ),


        CollegeTier:
            parseInt(
                document.getElementById("CollegeTier").value
            ),

        CollegeCityTier:
            parseInt(
                document.getElementById("CollegeCityTier").value
            ),

        GraduationYear:
            parseInt(
                document.getElementById("GraduationYear").value
            ),

        age:
            parseFloat(
                document.getElementById("age").value
            ),


        conscientiousness:
            parseFloat(
                document.getElementById("conscientiousness").value
            ),

        agreeableness:
            parseFloat(
                document.getElementById("agreeableness").value
            ),

        extraversion:
            parseFloat(
                document.getElementById("extraversion").value
            ),

        nueroticism:
            parseFloat(
                document.getElementById("nueroticism").value
            ),

        openess_to_experience:
            parseFloat(
                document.getElementById("openess_to_experience").value
            )
    };


    console.log("Sending data:", data);


    try {

        // =========================
        // Send request to FastAPI
        // =========================

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


        // =========================
        // Handle API error
        // =========================

        if (!response.ok) {

            const errorData = await response.text();

            console.error("API Error:", errorData);

            throw new Error(
                "Prediction failed. Please check your input values."
            );
        }


        // =========================
        // Get response
        // =========================

        const result = await response.json();

        console.log("API Response:", result);


        // =========================
        // Format salary
        // =========================

        const salary = Number(
            result.predicted_salary
        ).toLocaleString("en-IN", {
            maximumFractionDigits: 2
        });


        // =========================
        // Display result
        // =========================

        salaryText.textContent = `₹ ${salary}`;

        resultBox.classList.remove("hidden");


    } catch (error) {

        console.error("Error:", error);

        errorBox.textContent =
            "Unable to connect to the prediction API. Make sure FastAPI is running.";

        errorBox.classList.remove("hidden");

    } finally {

        // Hide loading
        loading.classList.add("hidden");

        // Enable button
        predictButton.disabled = false;

    }

});