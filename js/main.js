const elDropdownMenuActivator = document.querySelector(".dropdown__menu__activator");
const elDropdownMenu = document.querySelector(".dropdown__menu");
elDropdownMenuActivator.addEventListener("mouseover", function () {
  elDropdownMenu.classList.toggle("dropdown__menu__active")
});
// elDropdownMenuActivator.addEventListener("mouseleave", function () {
//   elDropdownMenu.classList.toggle("dropdown__menu__close")
// });


// const elDropdownMenuActivator = document.querySelector(".dropdown__menu__activator");
// const elDropdownMenuActive = document.querySelector(".dropdown__menu__active");
// const elDropdownMenu = document.querySelector(".dropdown__menu");
// elDropdownMenuActivator.addEventListener("click", function () {
//   elDropdownMenu.classList.toggle("dropdown__menu__active")
// });