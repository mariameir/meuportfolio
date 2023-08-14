var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  const tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach((tooltip) => {
  const tooltipText = tooltip.querySelector(".tooltiptext");
  tooltip.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    tooltipText.style.top = mouseY + "px";
    tooltipText.style.left = mouseX + "px";
  });
  tooltip.addEventListener("mouseenter", () => {
    tooltipText.style.visibility = "visible";
    tooltipText.style.opacity = "1";
  });
  tooltip.addEventListener("mouseleave", () => {
    tooltipText.style.visibility = "hidden";
    tooltipText.style.opacity = "0";
  });
});