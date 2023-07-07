// Humbugger Item
let button = document.querySelector("#toggle-menu-button");
let menu = document.querySelector("#toggle-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
