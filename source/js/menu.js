(function () {
  const button = document.querySelector(".main-nav__toggle");
  const mainNav = document.querySelector(".main-nav");

  if (mainNav) {
    mainNav.classList.remove("main-nav--nojs");
  }

  if (button && mainNav) {
    button.addEventListener("click", () => {
      if (mainNav.classList.contains("main-nav--opened")) {
        console.log("close")
        mainNav.classList.remove("main-nav--opened")
        mainNav.classList.add("main-nav--closed");
      } else {
        console.log("open")
        mainNav.classList.remove("main-nav--closed")
        mainNav.classList.add("main-nav--opened");
      }
    });
  }
})();
