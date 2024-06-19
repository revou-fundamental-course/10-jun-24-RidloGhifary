let isCelsiusToFahrenheit = true;

function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  if (isNaN(inputValue)) {
    document.getElementById("result").textContent =
      "Please enter a valid number";
    return;
  }

  let result;
  if (isCelsiusToFahrenheit) {
    result = (inputValue * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).textContent = `${inputValue} °C = ${result.toFixed(2)} °F`;
  } else {
    result = ((inputValue - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).textContent = `${inputValue} °F = ${result.toFixed(2)} °C`;
  }
}

function swap() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  if (isCelsiusToFahrenheit) {
    document.getElementById("inputLabel").textContent = "Celsius";
    document.getElementById("outputLabel").textContent = "Fahrenheit";
  } else {
    document.getElementById("inputLabel").textContent = "Fahrenheit";
    document.getElementById("outputLabel").textContent = "Celsius";
  }
  document.getElementById("result").textContent = "";
  document.getElementById("inputValue").value = "";
}
