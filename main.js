let buttons = document.getElementById(btn)

buttons.addEventListener("click", () => { const heightM = document.getElementById('height1').value;

const height_inches = document.getElementById('height2').value; const weight = document.getElementById('weight').value;

let MetricR= (weight/(heightM heightM));

let ImperialR (703* (weight/(height_inches* height In)))

document.getElementById("Metric").textContent =MetricR; document.getElementById("Imperial").textContent =ImperialR;

console.log(MetricR); console.log(ImperialR);

})