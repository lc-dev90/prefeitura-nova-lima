const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = today.getMonth();
let yyyy = today.getFullYear();

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

day.textContent = dd;
month.textContent = monthNames[mm];
year.textContent = yyyy;
