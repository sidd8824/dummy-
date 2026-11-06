const colors = ["#f4f6f8", "#fef3c7", "#d1fae5", "#fce7f3", "#e0e7ff"];
let index = 0;

const button = document.getElementById("colorBtn");

button.addEventListener("click", function () {
  index = (index + 1) % colors.length;
  document.body.style.backgroundColor = colors[index];
});