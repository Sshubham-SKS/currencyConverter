const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("first-converter");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("second-converter");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/198ee28519f667dc587d8b52/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      console.log(rate);
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
console.log(`Currency First: ${currencyFirstEl.value}`);
console.log(`Worth First: ${worthFirstEl.value}`);
console.log(`Currency Second: ${currencySecondEl.value}`);
console.log(`Worth-Second: ${ worthSecondEl.value}`);
console.log(`Rate: ${rate}`);
