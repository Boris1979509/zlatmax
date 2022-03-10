export default (() => {
  const dynamicAdapt = () => {
    const element = document.querySelector("[data-da]");
    if (!element) return;

    const clone = element.cloneNode(true);

    const arr = clone.dataset.da.split(",");
    clone.removeAttribute("data-da");
    clone.classList.add(`${arr[0]}-clone`.replace(/\./, ""));

    const mediaQuery = window.matchMedia(`(max-width: ${arr[1]}px)`);
    const to = document.querySelector(arr[0]);

    if (mediaQuery.matches && !to.children.length) {
      to.append(clone);
    }
  };
  window.addEventListener("load", dynamicAdapt);
  window.addEventListener("resize", dynamicAdapt);
})();
