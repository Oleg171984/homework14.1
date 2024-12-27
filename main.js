const sliderImages = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
let currentIndex = 0;

const slider = document.querySelector('.slider');
const imageElement = slider.querySelector('.slide-image');
const prevButton = slider.querySelector('.prev-button');
const nextButton = slider.querySelector('.next-button');
const dots = slider.querySelectorAll('.dot');

const updateSlider = () => {
  imageElement.src = sliderImages[currentIndex];
  imageElement.alt = `Slide ${currentIndex + 1}`;

  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === sliderImages.length - 1;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < sliderImages.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    updateSlider();
  });
});