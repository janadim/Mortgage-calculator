"use strict";

const costHouse = document.querySelector(".js-value");
const savings = document.querySelector(".js-savings");
const salary = document.querySelector(".js-salary");
const submitButton = document.querySelector(".js-submitButton");
const negativeMessage = document.querySelector(".js-message");

function maxMortgage() {
  const askedMortgage = costHouse.value - savings.value;
  const allowedAmount = salary.value * 4;
  const messageCalc = allowedAmount + savings.value;
  if (askedMortgage <= allowedAmount) {
    console.log("you'll get it");
  } else {
    negativeMessage.innerHTML = `Sorry, but the maximal ammout in your case is ${messageCalc}`;
    console.log(`Sorry, but the maximal ammout in your case is ${messageCalc}`);
  }
}

function handleClickSubmitButton() {
  maxMortgage();
}

submitButton.addEventListener("click", handleClickSubmitButton);
