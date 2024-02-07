const themeButton = document.querySelector(".mode-icons-wrapper");
const menuIcon = document.querySelector("#menu-icon");
const mainNav = document.querySelector(".main-nav");
const closeIcon = document.querySelector(".close-icon");
const body = document.querySelector("body");

themeButton.addEventListener("click", (e) => {
  if (localStorage.getItem("alaradoTheme")) {
    if (localStorage.getItem("alaradoTheme") === "dark-mode-theme") {
      localStorage.setItem("alaradoTheme", "");
      body.classList.remove("dark-mode-theme");
    } else {
      localStorage.setItem("alaradoTheme", "dark-mode-theme");
      body.classList.add("dark-mode-theme");
    }

    return;
  }
  localStorage.setItem("alaradoTheme", "dark-mode-theme");
  body.classList.add("dark-mode-theme");
});

menuIcon.addEventListener("click", (e) => {
  mainNav.classList.remove("nav-collapse");
  setTimeout(() => mainNav.classList.add("moveNavbar"), 200);
});

closeIcon.addEventListener("click", (e) => {
  mainNav.classList.remove("moveNavbar");
  setTimeout(() => mainNav.classList.add("nav-collapse"), 200);
});

document.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("alaradoTheme")) {
    body.classList.add(localStorage.getItem("alaradoTheme"));
  }
});
