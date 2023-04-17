const burgerMenu = () => {
  const handlerMenuButton = document.querySelector(".js-menu-handler");
  const menu = document.querySelector(".js-menu");

  handlerMenuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    handlerMenuButton.classList.toggle("menu-active")
  })
}

burgerMenu();
