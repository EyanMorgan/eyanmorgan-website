// === Slideshow ===
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots-container');

let currentSlide = 0;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.setAttribute('data-slide', i);
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Function to go to a specific slide
function goToSlide(index) {
  const slideshow = document.querySelector('.slideshow');
  slideshow.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentSlide = index;
}

// Next slide
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
});

// Previous slide
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(currentSlide);
});

// Dot navigation
dotsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    const slide = parseInt(e.target.getAttribute('data-slide'));
    goToSlide(slide);
  }
});

// Auto slide every 5 seconds (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}, 5000);


// === Hamburger Menu ===
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
