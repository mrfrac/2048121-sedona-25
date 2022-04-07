(function () {
  const button = document.querySelector(".main-nav__toggle");

  if (button) {
    const navigationElement = document.querySelector(".main-nav__list");
    button.addEventListener("click", () => {
      navigationElement.classList.toggle("main-nav__list--open");
    });
  }
})();
