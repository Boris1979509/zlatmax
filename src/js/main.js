import "./libs/dynamic_adapt";

const setEqualHeight = (selector) => {
  const elements = document.querySelectorAll(selector) || [];
  const nums = [...elements].map((item) => {
    item.removeAttribute("style");
    return item.clientHeight;
  });
  const maxHeight = Math.max.apply(Math, nums);
  [...elements].forEach((item) => (item.style.height = maxHeight + "px"));
};

const documentActions = (e) => {
  const targetElement = e.target;

  if (targetElement.closest("[data-id]")) {
    e.preventDefault();
    const id = targetElement.dataset.id;
    if (id) {
      const subMenu = document.querySelector(`[data-parent="${id}"]`);
      if (subMenu) {
        const activeLinkMenu = document.querySelector(".menu-catalog ._active");
        const activeBlock = document.querySelector(".sub-menu-catalog ._show");
        if (activeLinkMenu && activeLinkMenu !== targetElement) {
          activeLinkMenu.classList.remove("_active");
          activeBlock.classList.remove("_show");
        }
        targetElement.classList.toggle("_active");
        subMenu.classList.toggle("_show");

        /** Делаем равные по длинне блоки  */
        const selector = `[data-parent="${id}"] .sub-menu-catalog__category`;

        setEqualHeight(selector);
        window.addEventListener("resize", () => setEqualHeight(selector));
      }
    }
  }
};

document.addEventListener("click", documentActions);
