// Get all navigation items
const navItems = document.querySelectorAll('.nav-item');

// Get current page URL
const currentPage = window.location.pathname;

// Loop through nav links to check their href
navItems.forEach(item => {
  // Check if the href matches the current page
  if (item.getAttribute('href') === currentPage) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});




const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0; // Image index
const size = images[0].clientWidth; // Image width

// Function to move to the next image
function nextImage() {
  counter++;
  if (counter >= images.length) {
    counter = 0; // Reset to the first image
  }
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
}

// Auto slide every 3 seconds
setInterval(nextImage, 3000);

// Adjust carousel on window resize
window.addEventListener('resize', () => {
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});


// Assuming the purple indicator has an ID of "indicator"
const indicator = document.getElementById('indicator');

document.querySelectorAll('nav li a').forEach(link => {
  link.addEventListener('click', () => {
    // Get the clicked link's text content
    const selectedItem = link.textContent;

    // Move the indicator
    indicator.style.left = link.offsetLeft + 'px';

    // Load content dynamically (using AJAX or similar)
    // ...
  });
});

