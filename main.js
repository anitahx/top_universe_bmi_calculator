function calculateBMI () {

    heightMeters = document.getElementById('height_meters').value; 
    heightInches = document.getElementById('height_inches').value; 
    weight = document.getElementById("weight").value;
    heightMeters = document.getElementById('height_meters').value; 
    heightMeters = document.getElementById('height_inches').value; 
    weight = document.getElementById("weight").value;
    
    document.getElementById('bmi_metric_result').innerHTML = (weight/ (heightMeters * heightMeters))
    document.getElementById('bmi_imperial_result').innerHTML = (783 * (weight/ heightInches * heightInches))
}
