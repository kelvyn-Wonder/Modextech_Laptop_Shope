const navOpen = document.querySelector(".nav_humburger");
const navClose = document.querySelector(".close_toggle");
const menu = document.querySelector(".nav_menu");
const navContainer = document.querySelector(".nav_menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  navContainer.style.left = "0";
  navContainer.style.width = "30rem";
});
navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  navContainer.style.left = "-30rem";
  navContainer.style.width = "0";
});



AOS.init();