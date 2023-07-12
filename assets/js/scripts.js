let menu = document.querySelector(".menu-icon");
let nav = document.querySelector(".nav");

menu.onclick = () => {
  menu.classList.toggle("ri-close-line")
  nav.classList.toggle("open")
}

function backToTop() {
  scrollTo(0, 0);
}