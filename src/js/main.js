"use strict";

const costHouse = document.querySelector(".js-value");
const savings = document.querySelector(".js-savings");
const salary = document.querySelector(".js-salary");
const radioInputs = document.querySelector(".js-10-years");
const submitButton = document.querySelector(".js-submitButton");
let negativeMessage = document.querySelector(".js-message");
const fixedMonthCost = document.querySelector(".js-fixedMonthCost");
const monthlyInterest = document.querySelector(".js-monthInterest");
const totalCost = document.querySelector(".js-totalMonthCost");

function correctDataInputs() {
  console.log(costHouse.value);
  if (costHouse.value === "" || salary.value === "") {
    negativeMessage.innerHTML = `You have to fill in all the fields`;
  } else {
    console.log("everything is filled in");
  }
}

function maxMortgage() {
  const askedMortgage = costHouse.value - savings.value;
  const allowedAmount = salary.value * 4;
  const messageCalc = parseInt(allowedAmount) + parseInt(savings.value);

  console.log(messageCalc);
  if (askedMortgage <= allowedAmount) {
    negativeMessage.innerHTML = `You can get: ${messageCalc}`;
    // fixedMonthCost.innerHTML = monthCost;
    console.log(`you'll get ${messageCalc}`);
  } else {
    negativeMessage.innerHTML = `Sorry, but the maximal ammout in your case is ${messageCalc}`;
    console.log(`Sorry, but the maximal ammout in your case is ${messageCalc}`);
  }
}

// const years = document.querySelector(".js-radioInterests");

// function handleClickRadio(ev) {
//   const radioTarget = ev.target;
//   const monthCost = messageCalc / (radioTarget * 12);

//   fixedMonthCost.innerHTML = monthCost;
// }

// years.addEventListener("click", handleClickRadio);

function handleClickSubmitButton() {
  correctDataInputs();
  maxMortgage();
}

submitButton.addEventListener("click", handleClickSubmitButton);

// Aparece una casilla con el coste fijo mensual que sera igual a: (La cantidad pedida/[numero de anos de plazo*12meses])
