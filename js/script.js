 
const menuButton = document.querySelector(".btn-header-menu");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");

let menuOpened = false;

 
menuButton.addEventListener("click", () => {
 
  menuOpened = !menuOpened;
 
  if (menuOpened) {
    menuButton.classList.add("opened");
    menu.classList.add("opened");
	body.classList.add("fixed");
  } else {
    menuButton.classList.remove("opened");
    menu.classList.remove("opened");
    body.classList.remove("fixed");
  }
});