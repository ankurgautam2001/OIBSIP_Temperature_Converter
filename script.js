const celciusEl = document.getElementById("Celcius");
const fahrenheitEl = document.getElementById("Fahrenheit");
const kelvinEl = document.getElementById("Kelvin");

const tempLoad = () => {
  let fa = document.getElementById("fa");
  fa.innerHTML = "&#xf2cb";
  fa.style.color = "#007bff";

  setTimeout(() => {
    fa.innerHTML = "&#xf2ca;";
    fa.style.color = "#ffa41b";
  }, 1000);

  setTimeout(() => {
    fa.innerHTML = "&#xf2c9;";
    fa.style.color = "#ffa41b";
  }, 2000);

  setTimeout(() => {
    fa.innerHTML = "&#xf2c8;";
    fa.style.color = "#fd7e14";
  }, 3000);

  setTimeout(() => {
    fa.innerHTML = "&#xf2c7;";
    fa.style.color = "#ff5151";
  }, 4000);
};

setInterval(() => {
  fa.style.color = "#007bff";
  tempLoad();
}, 5000);

function computeTemp(event) {
  const currentValue = event.target.value;

  switch (event.target.name) {
    case "Celcius":
      fahrenheitEl.value = (currentValue * 9) / 5 + 32;
      kelvinEl.value = parseFloat(currentValue) + 273.15;
      break;

    case "Fahrenheit":
      celciusEl.value = ((currentValue - 32) * 5) / 9;
      kelvinEl.value = ((currentValue - 32) * 5) / 9 + 273.15;
      break;

    case "Kelvin":
      celciusEl.value = currentValue - 273.15;
      fahrenheitEl.value = ((currentValue - 273.15) * 9) / 5 + 32;
      break;

    default:
      break;
  }
}
