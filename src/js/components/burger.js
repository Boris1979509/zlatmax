export default (() => {
  const burger = document.querySelector("nav.menu > button.icon-menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    document.querySelector(".menu__body").classList.toggle("menu-open");
    if (document.documentElement.classList.contains("catalog-open")) {
      document.documentElement.classList.remove("catalog-open");
    }
    if (document.documentElement.classList.contains("sub-menu-open")) {
      document.documentElement.classList.remove("sub-menu-open");
    }
  });
})();
