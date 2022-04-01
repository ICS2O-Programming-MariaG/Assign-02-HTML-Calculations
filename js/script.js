"use strict"

function enterClicked() {
  const CONVERSION_RATE = 0.8;
  let dollarsCad = document.getElementById("money-cad").value;
  let days = document.getElementById("days-in-us").value;
  let dollarsUsd = dollarsCad * CONVERSION_RATE;
  document.getElementById("results").innerHTML = "The amount of money you will have for your trip in USD is $" + dollarsUsd.toFixed(2) + ".";
}