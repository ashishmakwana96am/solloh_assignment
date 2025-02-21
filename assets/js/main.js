// ----animation AOS js
AOS.init();
AOS.init({
  offset: 80,
  delay: 100,
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
  anchorPlacement: "top-",
});

// ---Hero section play video
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("hero-video");
    const playBtn = document.getElementById("play-btn");
    const icon = playBtn.querySelector("i");

    playBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (video.paused) {
        video.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
      } else {
        video.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
      }
    });
  });

//   --resize header 

  document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar");
    let logo = document.querySelector(".navbar-brand img");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logo.classList.add("small");
        logo.classList.remove("large");
      } else {
        navbar.classList.remove("scrolled");
        logo.classList.add("large");
        logo.classList.remove("small");
      }
    });
  });
