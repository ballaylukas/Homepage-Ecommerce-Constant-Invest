"use strict";

// FOOTER - CURRENT YEAR

const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
