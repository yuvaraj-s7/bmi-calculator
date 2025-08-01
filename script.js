function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        document.getElementById("bmiValue").textContent = bmi.toFixed(2);

        let category = "Normal Weight";

        if (bmi < 18.5) {
            category = "You are Underweight ";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "You are Normal Weight ";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "You are Overweight ";
        } else {
            category = "Obese";
        }

        document.getElementById("bmiCategory").textContent = category;
    } else {
        alert("Please enter valid weight and height values.");
    }
}
