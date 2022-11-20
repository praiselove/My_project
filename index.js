const slides = document.querySelector(".slides");
const slide = Array.from(slides.children);
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelector(".dots");
const dot = Array.from(dots.children);

const slideWidth = slide[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = index * slideWidth + "px";
};
slide.forEach(setSlidePosition);

const moveToSlide = (slides, currentSlide, targetSlide) => {
  slides.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

prev.addEventListener("click", (e) => {
  const currentSlide = slides.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dots.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(slides, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

next.addEventListener("click", (e) => {
  const currentSlide = slides.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dots.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;

  moveToSlide(slides, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

dots.addEventListener("click", (e) => {
  const targetDot = e.target.closest(".dot");

  if (!targetDot) {
    return;
  }

  const currentSlide = slides.querySelector(".current-slide");
  const currentDot = dots.querySelector(".current-slide");
  const targetIndex = dot.findIndex((dot) => dot === targetDot);
  const targetSlide = slide[targetIndex];
  moveToSlide(slides, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
