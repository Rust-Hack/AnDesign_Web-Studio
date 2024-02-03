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

  slider.addEventListener('input', function () {
    const value = this.value;
    const translateValue = -((value - 1) * 280); // 270 (image width) + 10 (margin-right)
    slides.style.transform = `translateX(${translateValue}px)`;
    currentNumber.textContent = value.toString().padStart(2, '0');
  });

  slides.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });

  slides.addEventListener('touchmove', function (e) {
    const deltaX = e.touches[0].clientX - startX;
    const currentValue = parseInt(slider.value, 10);
    const newValue = Math.min(Math.max(currentValue - Math.sign(deltaX), 1), 8);

    if (currentValue !== newValue) {
      slider.value = newValue;
      slider.dispatchEvent(new Event('input'));
    }

    startX = e.touches[0].clientX;
    e.preventDefault();
  });
});