const btn = document.getElementById("Calculate")
    btn.addEventListener("click",(event) => {
    event.preventDefault()

    heightMeters = document.getElementById('height_feet').value; 
    heightInches = document.getElementById('height_inches').value; 
    weight = document.getElementById('weight_kg').value;
    
    document.getElementById('bmi_metric_result').textContent = (weight/ (heightMeters * heightMeters))
    document.getElementById('bmi_imperial_result').textContent = (783 * (weight/ (heightInches * heightInches)))

    console.log(bmi_metric_result)
    console.log(bmi_imperial_result)
})


