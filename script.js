document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});


let currentIndex = 0;
const slides = document.querySelector('.carousel');
const totalSlides = slides.children.length;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* Auto Slide Every 3 Seconds */
let autoSlide = setInterval(() => {
  nextSlide();
}, 3000);

function nextSlide() {
  showSlide(currentIndex + 1);
  resetAutoSlide();
}

function prevSlide() {
  showSlide(currentIndex - 1);
  resetAutoSlide();
}

/* Reset Auto Slide Timer When User Clicks Navigation */
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    nextSlide();
  }, 3000);
}

