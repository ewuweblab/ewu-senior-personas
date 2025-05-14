const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const captionName = document.getElementById('caption-name');

let currentSlide = 0;
const totalSlides = slides.length;

// Caption data
const captions = [
  { name: "Alex Morgan" },
  { name: "Jordan Lee" },
  { name: "Riley Chen" },
  { name: "Taylor Smith" },
  { name: "Casey Jordan" }
];

function updateSlide() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  captionName.textContent = captions[currentSlide].name;
}

function goToNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function goToPrevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}

// Button controls
nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

// Auto-advance
setInterval(goToNextSlide, 5000);

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goToNextSlide();
  if (e.key === 'ArrowLeft') goToPrevSlide();
});

// Initialize
updateSlide();
