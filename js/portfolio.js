const slider = document.getElementById("portfolioSliderItems");
const dots = document.querySelectorAll(".portfolio-slider-dot");

function goToPortfolioSlide(index) {
  const offset = -index * 100;
  slider.style.transform = `translateX(${offset}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
