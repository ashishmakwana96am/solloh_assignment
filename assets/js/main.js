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
      let heroSection = document.querySelector(".hero-sec");
    
      window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
    
        if (scrollY > 180) {
          navbar.classList.add("scrolled");
          logo.classList.add("small");
          logo.classList.remove("large");
          heroSection.style.paddingTop = "70px"; // Minimum padding when scrolled
        } else if (scrollY >= 160 && scrollY <= 180) {
          let dynamicPadding = 95 - ((scrollY - 160) * 1.25); // Smoothly reduce padding
          heroSection.style.paddingTop = `${dynamicPadding}px`;
        } else {
          navbar.classList.remove("scrolled");
          logo.classList.add("large");
          logo.classList.remove("small");
          heroSection.style.paddingTop = "95px"; // Restore original spacing
        }
      });
    });

    // ---intractive dropdown responsive 
   document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-link, .submenu_link, .subsub_menu_link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let isSubmenu = this.classList.contains("nav-link");
      let isSubsubMenu = this.classList.contains("submenu_link");
      let isInnerSubMenu = this.classList.contains("subsub_menu_link");

      // Close other sub-menus when clicking a nav-link
      if (isSubmenu) {
        document.querySelectorAll(".nav-link[aria-expanded='true']").forEach((otherLink) => {
          if (otherLink !== this) {
            otherLink.setAttribute("aria-expanded", "false");
            let otherMenu = otherLink.nextElementSibling;
            if (otherMenu && otherMenu.classList.contains("sub-menu")) {
              otherMenu.style.display = "none";
            }
          }
        });
      }

      // Close other sub-sub-menus when clicking a submenu_link
      if (isSubsubMenu) {
        document.querySelectorAll(".submenu_link[aria-expanded='true']").forEach((otherLink) => {
          if (otherLink !== this) {
            otherLink.setAttribute("aria-expanded", "false");
            let otherMenu = otherLink.nextElementSibling;
            if (otherMenu && otherMenu.classList.contains("subsub-menu")) {
              otherMenu.style.display = "none";
            }
          }
        });
      }

      // Close other inner-sub-menus when clicking a subsub_menu_link
      if (isInnerSubMenu) {
        document.querySelectorAll(".subsub_menu_link[aria-expanded='true']").forEach((otherLink) => {
          if (otherLink !== this) {
            otherLink.setAttribute("aria-expanded", "false");
            let otherMenu = otherLink.nextElementSibling;
            if (otherMenu && otherMenu.classList.contains("innersub_menu")) {
              otherMenu.style.display = "none";
            }
          }
        });
      }

      // Toggle the clicked menu
      let expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", expanded ? "false" : "true");

      let submenu = this.nextElementSibling;
      if (submenu && (submenu.classList.contains("sub-menu") || submenu.classList.contains("subsub-menu") || submenu.classList.contains("innersub_menu"))) {
        submenu.style.display = expanded ? "none" : "block";
      }
    });
  });
});
