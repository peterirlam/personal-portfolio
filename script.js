// Skills section tabs
let tabs = document.querySelectorAll(".tab-links");
let tabText = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabText.forEach((text) => {
      text.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabText[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

// Automatically update current year in footer copyright
const footerYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();
footerYear.textContent = currentYear;

// Mobile Navigation
const sideMenu = document.getElementById("sideMenu");
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-xmark");

openMenu.addEventListener("click", () => {
  sideMenu.style.right = "0";
});

closeMenu.addEventListener("click", () => {
  sideMenu.style.right = "-20rem";
});
