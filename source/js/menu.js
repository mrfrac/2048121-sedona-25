(function() {
  window.addEventListener("load", () => {
    const button = document.querySelector(".main-nav__toggle");
    const navigationElement = document.querySelector(".main-nav__list");
    button.addEventListener("click", () => {
      navigationElement.classList.toggle("visually-hidden");
    });
  });
})();
