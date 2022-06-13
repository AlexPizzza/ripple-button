const rippleButton = document.querySelector(".ripple-button");

rippleButton.addEventListener("pointerdown", (event) => {
  mousePosToCustomProp(event, rippleButton);

  rippleButton.classList.add("ripple");

  rippleButton.addEventListener(
    "animationend",
    (_event) => {
      rippleButton.classList.remove("ripple");
    },
    { once: true }
  );
});

function mousePosToCustomProp(event, element) {
  const posX = event.offsetX;
  const posY = event.offsetY;

  element.style.setProperty("--x", posX + "px");
  element.style.setProperty("--y", posY + "px");
}
