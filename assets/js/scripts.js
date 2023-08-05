// // Include a menu icon on smaller devices
// let menu = document.querySelector(".menu-icon");
// let nav = document.querySelector(".nav");

// menu.onclick = () => {
//   menu.classList.toggle("ri-close-line");
//   nav.classList.toggle("open");
// };

// Scroll back to top when button is clicked
function backToTop() {
  scrollTo(0, 0);
}

// Toggle lightmode
let themeButton = document.querySelector("#theme-button");
let body = document.querySelector("body");
let icon = document.getElementById("lightmode-icon");
let li = document.getElementsByTagName("li");
let a = document.getElementsByTagName("a");
let icons = document.getElementsByTagName("i");
let logo = document.getElementById("logo");
let footer = document.querySelector("footer");

themeButton.addEventListener("click", (e) => {
  body.classList.toggle("lightmode");
  footer.classList.toggle("lightmode")

  if (body.classList.contains("lightmode")) {
    for (var i = 0; i < li.length; i++) {
      li[i].classList.add("lightmode");
    }

    for (var i = 0; i < a.length; i++) {
      a[i].classList.add("lightmode");
    }

    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.add("lightmode");
    }
  } else {
    for (var i = 0; i < li.length; i++) {
      li[i].classList.remove("lightmode");
    }

    for (var i = 0; i < a.length; i++) {
      a[i].classList.remove("lightmode");
    }

    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.remove("lightmode");
    }
  }

  if (body.classList.contains("lightmode")) {
    icon.classList.remove("ri-sun-line");
    icon.classList.add("ri-moon-line");

    logo.src = "assets/img/logo-lightmode.webp";
  } else {
    icon.classList.remove("ri-moon-line");
    icon.classList.add("ri-sun-line");

    logo.src = "assets/img/logo.webp";
  }
});

// Current year on footer
let year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();