const slides = document.querySelectorAll(".slide");

function randomSlide(slides) {
  const max = slides.length - 1;
  const min = 0;
  return Math.round(Math.random() * (max - min) + min);
}

function slidePlugin(activeSlide = 0) {
  slides[activeSlide].classList.add("active");

  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      clearActiveClass();
      slide.classList.add("active");
    });
  });

  function clearActiveClass() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

slidePlugin(randomSlide(slides));
