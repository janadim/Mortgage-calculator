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
  const messageCalc = allowedAmount + savings.value;
  if (askedMortgage <= allowedAmount) {
    console.log(`you'll get ${messageCalc}`);
  } else {
    negativeMessage.innerHTML = `Sorry, but the maximal ammout in your case is ${messageCalc}`;
    console.log(`Sorry, but the maximal ammout in your case is ${messageCalc}`);
  }
}

// function fixedMonthCost() {
//   maxMortgage();
// }

function handleClickSubmitButton() {
  correctDataInputs();
  maxMortgage();
}

submitButton.addEventListener("click", handleClickSubmitButton);
