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
  let startTranslateX = 0;
  let isSwiping = false;

  slider.addEventListener('input', function () {
    const value = this.value;
    const translateValue = -((value - 1) * 280); // 270 (image width) + 10 (margin-right)
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${translateValue}px)`;
    currentNumber.textContent = value.toString().padStart(2, '0');
    isSwiping = false;
  });

  slides.addEventListener('touchstart', function (e) {
    if (isSwiping) return;
    startX = e.touches[0].clientX;
    startTranslateX = parseInt(getComputedStyle(slides).transform.split(',')[4]);
  });

  slides.addEventListener('touchmove', function (e) {
<<<<<<< HEAD
    if (isSwiping) {
      const deltaX = e.touches[0].clientX - startX;
      const newTranslateX = startTranslateX + deltaX;
      slides.style.transition = 'none';
      slides.style.transform = `translateX(${newTranslateX}px)`;
      e.preventDefault();
    }
=======
    if (!isSwiping) return;

    const deltaX = e.touches[0].clientX - startX;
    const newTranslateX = startTranslateX + deltaX;
    slides.style.transition = 'none'; // Добавим эту строку для отключения анимации
    slides.style.transform = `translateX(${newTranslateX}px)`;

    e.preventDefault();
>>>>>>> cfe63ca5e1e8fac4be091f97834b54757321d139
  });

  slides.addEventListener('touchend', function (e) {
    if (isSwiping) {
      const deltaX = e.changedTouches[0].clientX - startX;
      const threshold = 50; // Порог для определения свайпа

      slides.style.transition = 'transform 0.5s ease-in-out';

<<<<<<< HEAD
      if (deltaX > threshold) {
        slider.value = Math.max(parseInt(slider.value, 10) - 1, 1);
      } else if (deltaX < -threshold) {
        slider.value = Math.min(parseInt(slider.value, 10) + 1, 8);
      }

      slider.dispatchEvent(new Event('input'));
      isSwiping = false;
=======
    slides.style.transition = ''; // Удаляем инлайн-стиль, чтобы включить анимацию

    if (deltaX > threshold) {
      slider.value = Math.max(parseInt(slider.value, 10) - 1, 1);
    } else if (deltaX < -threshold) {
      slider.value = Math.min(parseInt(slider.value, 10) + 1, 8);
>>>>>>> cfe63ca5e1e8fac4be091f97834b54757321d139
    }
  });
});