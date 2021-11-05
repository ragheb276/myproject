/** @format */
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (window.scrollY >= 51) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
};
