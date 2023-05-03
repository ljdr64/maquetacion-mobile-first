const accionLeft = () => {
  const plansContainerSlider = document.querySelector(
    ".plans-container--slider"
  );
  plansContainerSlider.scrollBy({
    top: 0,
    left: -250,
    behavior: "smooth",
  });
};
const accionRight = () => {
  const plansContainerSlider = document.querySelector(
    ".plans-container--slider"
  );
  plansContainerSlider.scrollBy({
    top: 0,
    left: 250,
    behavior: "smooth",
  });
};

const greyLeftArrow = document.querySelector(".grey-left-arrow");
greyLeftArrow.addEventListener("click", accionLeft);

const greyRightArrow = document.querySelector(".grey-right-arrow");
greyRightArrow.addEventListener("click", accionRight);
