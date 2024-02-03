function toggleMenu() {
    var links = document.querySelector('.links');
    var cross = document.querySelector('.cross');

    links.classList.toggle('active');
    cross.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function () {
  const slides = document.getElementById('slides');
  const slider = document.getElementById('slider');
  const currentNumber = document.getElementById('currentNumber');
  let startX = 0;
  let startScrollLeft = 0;
  let isSwiping = false;

  slider.addEventListener('input', function () {
    const value = this.value;
    const translateValue = -((value - 1) * 280); // 270 (image width) + 10 (margin-right)
    slides.style.transform = `translateX(${translateValue}px)`;
    currentNumber.textContent = value.toString().padStart(2, '0');
    isSwiping = false;
  });

  slides.addEventListener('touchstart', function (e) {
    if (isSwiping) return;
    startX = e.touches[0].clientX;
    startScrollLeft = slides.scrollLeft;
  });

  slides.addEventListener('touchmove', function (e) {
    if (isSwiping) {
      const deltaX = startX - e.touches[0].clientX;
      slides.scrollLeft = startScrollLeft + deltaX;
      e.preventDefault();
    }
  });

  slides.addEventListener('touchend', function () {
    isSwiping = false;
  });

  slides.addEventListener('scroll', function () {
    if (!isSwiping) {
      const currentIndex = Math.round(slides.scrollLeft / 280) + 1;
      slider.value = currentIndex;
      currentNumber.textContent = currentIndex.toString().padStart(2, '0');
    }
  });
});