//Validity Check
const entries = document.getElementsByTagName("input");
const button = document.getElementById("next")
const inputs = entries.every(input => input.reportValidity());
