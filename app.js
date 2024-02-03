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
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');

  slider.addEventListener('input', function () {
    const value = this.value;
    const translateValue = -((value - 1) * 280); // 270 (image width) + 10 (margin-right)
    slides.style.transform = `translateX(${translateValue}px)`;
    currentNumber.textContent = value.toString().padStart(2, '0');
  });

  arrowLeft.addEventListener('click', function () {
    const currentValue = parseInt(slider.value, 10);
    slider.value = Math.max(currentValue - 1, 1);
    slider.dispatchEvent(new Event('input'));
  });

  arrowRight.addEventListener('click', function () {
    const currentValue = parseInt(slider.value, 10);
    slider.value = Math.min(currentValue + 1, 8);
    slider.dispatchEvent(new Event('input'));
  });
});