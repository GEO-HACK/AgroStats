// ScrollReveal configuration
ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
}).reveal(".hero-text", { delay: 500 });
ScrollReveal({
  origin: "right",
  distance: "100px",
  duration: 2000,
  reset: true,
}).reveal(".hero-img", { delay: 500 });
ScrollReveal({
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  reset: true,
}).reveal(".service", { delay: 500 });

//about us scroll reveal
ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 1000,
  reset: true,
}).reveal(".about-section", { delay: 300 });
ScrollReveal({
  origin: "left",
  distance: "100px",
  duration: 2000,
  reset: true,
}).reveal(".mission", { delay: 500 });
ScrollReveal({
  origin: "right",
  distance: "100px",
  duration: 2000,
  reset: true,
}).reveal(".vision", { delay: 500 });
//Team scroll reveal
// Function to initialize ScrollReveal
function initializeScrollReveal() {
  ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 1000,
    reset: true,
  }).reveal(".team-member", { delay: 500 });
}

// Check if the screen width is greater than 768px
if (window.innerWidth > 768) {
  initializeScrollReveal();
}

// Optional: Add event listener to handle window resizing
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    initializeScrollReveal();
  } else {
    ScrollReveal().clean(".team-member"); // Clean the reveal effects if width is less than 768px
  }
});

//services scroll reveal
ScrollReveal().reveal(".hero-service", { delay: 500 });
ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
}).reveal(".services-item:not(.reverse) p", { delay: 500 });
ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
}).reveal(".services-item.reverse p", { delay: 500 });
ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
}).reveal(".services-item:not(.reverse) .services-image", { delay: 500 });
ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
}).reveal(".services-item.reverse .services-image", { delay: 500 });

// ScrollReveal({
//   origin: "bottom",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// }).reveal(".footer-content", { delay: 500 });

// Smooth scroll
document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const id = link.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      const navHeight = document.getElementById("navbar").offsetHeight;
      const fixNav = document.getElementById("navbar");
      const container = document.getElementById("container");
      const containerHeight = container.offsetHeight;
      const containerTop = container.offsetTop;
      const containerBottom = containerTop + containerHeight;
      const scrollY = window.scrollY;
      const scrollBottom = scrollY + window.innerHeight;
      const isContainerVisible =
        scrollBottom > containerTop && scrollY < containerBottom;
      if (isContainerVisible) {
        fixNav.classList.add("fix-nav");
      } else {
        fixNav.classList.remove("fix-nav");
      }
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: "smooth",
      });
    });
  });
});

// Counter animation
document.addEventListener("DOMContentLoaded", () => {
  // Select all counters
  const counters = document.querySelectorAll(".counter");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const runCounter = (counter, targetNumber, duration) => {
    let currentNumber = 0;
    const increment = targetNumber / (duration / 50); // Increment value

    const updateCounter = () => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        counter.textContent = targetNumber;
      } else {
        counter.textContent = Math.ceil(currentNumber);
        requestAnimationFrame(updateCounter);
      }
    };
    updateCounter();
  };

  const handleScroll = () => {
    counters.forEach((counter) => {
      if (isInViewport(counter) && counter.textContent == "0") {
        counter.textContent = "0"; // Reset counter to 0
        const targetNumber = +counter.getAttribute("data-target");
        const duration = 6000; // Duration of the animation in milliseconds
        runCounter(counter, targetNumber, duration);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Check immediately if any counters are already in view
});

// Navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("navbar-toggle");
  const navbarLinks = document.getElementById("navbar-links");
  const content = document.getElementById("content");

  toggleButton.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
    content.classList.toggle("blur"); // Toggle blur effect on the content
  });

  // Remove blur when a link is clicked
  navbarLinks.addEventListener("click", function () {
    navbarLinks.classList.remove("active");
    content.classList.remove("blur");
  });
});
