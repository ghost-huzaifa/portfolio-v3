document.addEventListener("DOMContentLoaded", () => {
  // --- Experience Tabs ---
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to clicked button and target panel
      button.classList.add("active");
      const targetId = button.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });

  // --- Projects Carousel ---
  const track = document.querySelector(".carousel-track");
  if (track) {
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-btn.next");
    const prevButton = document.querySelector(".carousel-btn.prev");
    const dotsNav = document.querySelector(".carousel-dots");
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to each other
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove("active");
      targetDot.classList.add("active");
    };

    // Next Button
    nextButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling || slides[0]; // Loop back to start
      const currentDot = dotsNav.querySelector(".active");
      const nextDot = currentDot.nextElementSibling || dots[0];

      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
    });

    // Prev Button
    prevButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide =
        currentSlide.previousElementSibling || slides[slides.length - 1]; // Loop to end
      const currentDot = dotsNav.querySelector(".active");
      const prevDot =
        currentDot.previousElementSibling || dots[dots.length - 1];

      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, prevDot);
    });

    // Dot Nav
    dotsNav.addEventListener("click", (e) => {
      const targetDot = e.target.closest("button");
      if (!targetDot) return;

      const currentSlide = track.querySelector(".current-slide");
      const currentDot = dotsNav.querySelector(".active");
      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      const targetSlide = slides[targetIndex];

      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
    });
  }

  // --- Smooth Scroll Spy ---
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((li) => {
      li.classList.remove("active");
      if (li.getAttribute("href").includes(current)) {
        li.classList.add("active");
      }
    });
  });
});
