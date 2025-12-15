"use strict";

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.querySelector(".btn-convert");
  const numberInput = document.querySelector("#number");
  const results = document.querySelectorAll(".result");
  const initValues = document.querySelectorAll(".initValue");
  const inFeetRes = document.querySelector(".feet-res");
  const inMeterRes = document.querySelector(".meter-res");
  const inGallonRes = document.querySelector(".gallon-res");
  const inLiterRes = document.querySelector(".liter-res");
  const inPoundRes = document.querySelector(".pound-res");
  const inKiloRes = document.querySelector(".kilo-res");

  results.forEach((res) => {
    if (!numberInput.value) {
      res.classList.add("hidden");
    }
  });

  convertBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (!numberInput.value) return;
    convertingUnits();

    numberInput.value = "";

    results.forEach((res) => {
      if (!numberInput.value) {
        res.classList.remove("hidden");
      }
    });
  });

  function convertingUnits() {
    initValues.forEach((val) => (val.textContent = numberInput.value + " "));
    inFeetRes.textContent = (numberInput.value * 3.281).toFixed(3);
    inMeterRes.textContent = (numberInput.value / 3.281).toFixed(3);
    inGallonRes.textContent = (numberInput.value * 0.264).toFixed(3);
    inLiterRes.textContent = (numberInput.value / 0.264).toFixed(3);
    inPoundRes.textContent = (numberInput.value * 2.204).toFixed(3);
    inKiloRes.textContent = (numberInput.value / 2.204).toFixed(3);
  }
});
