const elDropdownMenuActivator = document.querySelectorAll(".dropdown__menu__activator");
const elDropdownMenuActive = document.querySelectorAll(".dropdown__menu__active");
const elDropdownMenu = document.querySelectorAll(".dropdown__menu");
elDropdownMenuActivator.addEventListener("click", function () {
  document.DropdownMenu.classList.toggle("DropdownMenuActive")
});