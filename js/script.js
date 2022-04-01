// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: April 1, 2022
// This file contains the JS functions for index.html

"use strict"

function enterClicked() {
  //Setting a constant for the conversion rate
  const CONVERSION_RATE = 0.8;
  //Declaring other variables
  let dollarsCad = parseFloat(document.getElementById("money-cad").value);
  let days = parseFloat(document.getElementById("days-in-us").value);
  let dollarsUsd = dollarsCad * CONVERSION_RATE;
  let dailyAmount = dollarsUsd / days;
  //Showing results on the webpage
  document.getElementById("results").innerHTML = "The total amount of money you will have for your trip in USD is $" + dollarsUsd.toFixed(2) + ".<br>For each day of your stay, you will have $" + dailyAmount.toFixed(2) + ".";
}