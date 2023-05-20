const burgerMenu = () => {
  const menuHandler = document.querySelector(".js-menu-handler");
  const menu = document.querySelector(".js-menu");

  menuHandler.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    menuHandler.classList.toggle("menu-active")
  })
}

burgerMenu();
