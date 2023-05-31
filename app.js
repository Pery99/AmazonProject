const navBtn = document.querySelector(".js-nav-btn");
const dropDown = document.querySelector(".dropdown");

navBtn.addEventListener("click", () => {
  dropDown.classList.toggle("active");
});
