(function () {
const slidesContainer = document.querySelector(".team__carousel");
const slide = document.querySelector(".team__container");
const prevButton = document.querySelector(".team__btn-left");
const nextButton = document.querySelector(".team__btn-right");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
})();
