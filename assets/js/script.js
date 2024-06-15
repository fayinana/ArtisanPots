const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
  links.classList.toggle("hide-menu");
  console.log("clicked");
});
