// Sección de tablas

const accionLeft = () => {
  const plansContainerSlider = document.querySelector(".main-tables-container");
  plansContainerSlider.scrollBy({
    top: 0,
    left: -320,
    behavior: "smooth",
  });
};
const accionRight = () => {
  const plansContainerSlider = document.querySelector(".main-tables-container");
  plansContainerSlider.scrollBy({
    top: 0,
    left: 320,
    behavior: "smooth",
  });
};

// Sección de planes

const accionGreyLeft = () => {
  const plansContainerSlider = document.querySelector(
    ".plans-container--slider"
  );
  plansContainerSlider.scrollBy({
    top: 0,
    left: -250,
    behavior: "smooth",
  });
};
const accionGreyRight = () => {
  const plansContainerSlider = document.querySelector(
    ".plans-container--slider"
  );
  plansContainerSlider.scrollBy({
    top: 0,
    left: 250,
    behavior: "smooth",
  });
};

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", accionLeft);

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", accionRight);

const greyLeftArrow = document.querySelector(".grey-left-arrow");
greyLeftArrow.addEventListener("click", accionGreyLeft);

const greyRightArrow = document.querySelector(".grey-right-arrow");
greyRightArrow.addEventListener("click", accionGreyRight);
