import "./libs/dynamic_adapt";
import "./components/burger";

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
          document.documentElement.classList.remove("sub-menu-open");
        }

        document.documentElement.classList.toggle("sub-menu-open");
        targetElement.classList.toggle("_active");
        subMenu.classList.toggle("_show");

        /** Делаем равные по длинне блоки  */
        const selector = `[data-parent="${id}"] .sub-menu-catalog__category`;

        setEqualHeight(selector);
        window.addEventListener("resize", () => setEqualHeight(selector));
      }
    }
  }
  if (targetElement.closest(".menu-top-header__link-catalog")) {
    document.documentElement.classList.add("catalog-open");

    e.preventDefault();
  }
  if (targetElement.closest(".menu-catalog__back")) {
    document.documentElement.classList.remove("catalog-open");
    const activeLinkMenu = document.querySelector(".menu-catalog ._active");
    const activeBlock = document.querySelector(".sub-menu-catalog ._show");
    activeLinkMenu ? activeLinkMenu.classList.remove("_active") : null;
    activeBlock ? activeBlock.classList.remove("_show") : null;
    e.preventDefault();
  }
  if (targetElement.closest(".sub-menu-catalog__back")) {
    document.documentElement.classList.remove("sub-menu-open");
    const activeLinkMenu = document.querySelector(".menu-catalog ._active");
    const activeBlock = document.querySelector(".sub-menu-catalog ._show");
    activeLinkMenu ? activeLinkMenu.classList.remove("_active") : null;
    activeBlock ? activeBlock.classList.remove("_show") : null;
    e.preventDefault();
  }
};

document.addEventListener("click", documentActions);
