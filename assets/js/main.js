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

// --menu icon -- responsive 
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".hamburger").addEventListener("click", function () {
    this.classList.toggle("is-active");
  });
});

// --------milestone --
function updateTimeline() {
  let section = document.querySelector(".milestone_timeline");
  let progressBar = document.querySelector(".timeline-progress");
  let milestones = document.querySelectorAll(".milestone");

  let rect = section.getBoundingClientRect();
  let inViewport = rect.top < window.innerHeight && rect.bottom > 0;

  if (inViewport) {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let scrollPercentage = ((scrollTop - sectionTop) / sectionHeight) * 100;

    progressBar.style.height = `${Math.min(100, Math.max(0, scrollPercentage))}%`;

    milestones.forEach(milestone => {
      let milestoneRect = milestone.getBoundingClientRect();
      if (milestoneRect.top < window.innerHeight * 0.75) {
        milestone.classList.add("in-view");
      } else {
        milestone.classList.remove("in-view");
      }
    });
  } else {
    progressBar.style.height = "0%"; // Reset when out of view
  }
}
window.addEventListener("scroll", updateTimeline);
updateTimeline();

// --fly in text
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".flyin_info");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("show"); // Add class when section is visible
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the section is visible
  );

  observer.observe(section);
});

///appointment search  zip code area
document.addEventListener("DOMContentLoaded", function () {
  const appointments = [
    { id: 1, name: "Kristine A. Johnson", specialty: "Family Medicine", location: "Minneapolis, Minnesota, United States", date: "2024-03-01", time: "PM", miles: 10 },
    { id: 2, name: "Michael Smith", specialty: "Cardiology", location: "Minneapolis, Kansas, United States", date: "2024-03-02", time: "AM", miles: 15 },
    { id: 3, name: "Lisa Brown", specialty: "Dermatology", location: "Minneota, Minnesota, United States", date: "2024-03-01", time: " PM", miles: 5 },
    { id: 4, name: "John Doe", specialty: "Neurology", location: "Unity, Wisconsin, United States", date: "2024-03-03", time: "AM", miles: 20 }
  ];

  const locations = [
    "Minneapolis, Minnesota, United States",
    "Minneapolis, Kansas, United States",
    "Minneota, Minnesota, United States",
    "Unity, Wisconsin, United States",
    "Union, New Jersey, United States"
  ];

  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const clearSearch = document.getElementById("clearSearch");
  const appointmentContainer = document.getElementById("appointmentContainer");
  const searchBtn = document.getElementById("searchBtn");

  function displayAppointments(data) {
    appointmentContainer.innerHTML = "";
    if (data.length === 0) {
      appointmentContainer.innerHTML = "<p>No results found.</p>";
      return;
    }
    data.forEach(app => {
      const card = document.createElement("div");
      card.classList.add("app-card-info");
      card.innerHTML = `
              <a href="#">
                  <div class="card_top">
                      <div>
                          <h4>${app.date}</h4>
                          <h3>${app.time}</h3>
                      </div>
                      <div class="card_right_errrow"><i class="fa-solid fa-chevron-right"></i></div>
                  </div>
                  <div class="doctor_location">
                      <div class="row align-items-center">
                          <div class="col-12 col-md-6">
                              <div class="doc-info">
                                  <div class="doc-img">
                                      <img src="assets/images/location1.png" alt="">
                                  </div>
                                  <div class="doc-data">
                                      <h3>${app.name}</h3>
                                      <p>${app.specialty}</p>
                                  </div>
                              </div>
                          </div>
                          <div class="col-12 col-md-6">
                              <div class="doc-location">
                                  <p>${app.location}</p>
                                  <h4>${app.miles} miles away</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </a>`;
      appointmentContainer.appendChild(card);
    });
  }

  displayAppointments(appointments);

  searchBtn.addEventListener("click", function () {
    const dateValue = document.getElementById("dateInput").value;
    const timeValue = document.getElementById("timeInput").value;
    const locationValue = searchInput.value.toLowerCase();
    const distanceValue = parseFloat(document.getElementById("distanceInput").value);

    const filteredData = appointments.filter(app => {
      return (
        (dateValue === "" || app.date === dateValue) &&
        (timeValue === "ALL" || app.time.toLowerCase() === timeValue.toLowerCase()) &&
        (locationValue === "" || app.location.toLowerCase().includes(locationValue)) &&
        (isNaN(distanceValue) || app.miles <= distanceValue)
      );
    });

    displayAppointments(filteredData);
  });

  searchInput.addEventListener("input", function () {
    let value = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (!value) {
      searchResults.style.display = "none";
      clearSearch.style.display = "none";
      return;
    }

    clearSearch.style.display = "flex";
    const filteredLocations = locations.filter(loc => loc.toLowerCase().includes(value));

    if (filteredLocations.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    filteredLocations.forEach(location => {
      const li = document.createElement("li");
      li.textContent = location;
      li.addEventListener("click", function () {
        searchInput.value = location;
        searchResults.innerHTML = "";
        searchResults.style.display = "none";
      });
      searchResults.appendChild(li);
    });

    searchResults.style.display = "block";
  });

  clearSearch.addEventListener("click", function () {
    searchInput.value = "";
    searchResults.innerHTML = "";
    searchResults.style.display = "none";
    clearSearch.style.display = "none";
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".search-box")) {
      searchResults.style.display = "none";
    }
  });
});

// ---appointment tab-3 search 
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".input-row input[type='search']");
  const genderSelect = document.querySelector(".form-select");
  const doctorList = document.querySelectorAll(".available-doctors");

  function filterDoctors() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedGender = genderSelect.value.toLowerCase();

    doctorList.forEach(doctor => {
      const doctorName = doctor.querySelector("h3").textContent.toLowerCase();
      const doctorSpecialty = doctor.querySelector("p").textContent.toLowerCase();
      const doctorGender = doctor.getAttribute("data-gender").toLowerCase();

      const nameMatch = !searchValue || doctorName.includes(searchValue) || doctorSpecialty.includes(searchValue);
      const genderMatch = selectedGender === "all" || doctorGender === selectedGender;

      if (nameMatch && genderMatch) {
        doctor.style.display = "flex";
      } else {
        doctor.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterDoctors);
  genderSelect.addEventListener("change", function () {
    setTimeout(filterDoctors, 100); // Delay added to ensure value update
  });

  filterDoctors();
});

// -----------appointment--location tab- 2 search
document.addEventListener("DOMContentLoaded", function () {
  const locations = [
    "Minneapolis, Minnesota, United States",
    "Minneapolis, Kansas, United States",
    "Minneota, Minnesota, United States",
    "Unity, Wisconsin, United States",
    "Union, New Jersey, United States"
  ];

  const searchBox = document.getElementById("search-box");
  const autocompleteList = document.getElementById("autocomplete-list");
  const locationItems = document.querySelectorAll(".location-data");

  searchBox.addEventListener("input", function () {
    let searchText = searchBox.value.toLowerCase();
    autocompleteList.innerHTML = "";

    if (searchText) {
      let filteredSuggestions = locations.filter(loc => loc.toLowerCase().includes(searchText));
      filteredSuggestions.forEach(loc => {
        let item = document.createElement("div");
        item.classList.add("autocomplete-item");
        item.textContent = loc;
        item.addEventListener("click", function () {
          searchBox.value = loc;
          autocompleteList.innerHTML = "";
          filterLocations();
        });
        autocompleteList.appendChild(item);
      });
    }
  });

  searchBox.addEventListener("keyup", filterLocations);

  function filterLocations() {
    let searchText = searchBox.value.toLowerCase();
    locationItems.forEach(item => {
      let clinicName = item.querySelector("h3").textContent.toLowerCase();
      let address = item.querySelector("p").textContent.toLowerCase();
      item.parentElement.style.display = clinicName.includes(searchText) || address.includes(searchText) ? "block" : "none";
    });
  }

  document.addEventListener("click", function (e) {
    if (!searchBox.contains(e.target) && !autocompleteList.contains(e.target)) {
      autocompleteList.innerHTML = "";
    }
  });
});

// --live chat box close icon
document.addEventListener("DOMContentLoaded", function () {
  const chatBox = document.querySelector(".live-chat");
  const chatIcon = document.querySelector(".chat-icon");
  const chatClose = document.querySelector(".chat-close");

  // Check localStorage and set chat visibility
  if (localStorage.getItem("chatClosed") === "true") {
    chatBox.classList.remove("active");
  }

  // Show chat box when clicking the chat icon
  chatIcon.addEventListener("click", function () {
    chatBox.classList.add("active");
    localStorage.setItem("chatClosed", "false"); // Reset state when opening
  });

  // Close chat box and store state
  chatClose.addEventListener("click", function () {
    chatBox.classList.remove("active");
    localStorage.setItem("chatClosed", "true");
  });
});

// ---contact form radio select hide show
  document.addEventListener("DOMContentLoaded", function () {
    const topicButtons = document.querySelectorAll(".topic-btn");
    const hideDiv = document.querySelector(".hide-div");
    const showDiv = document.querySelector(".show-div");
    const selectLabel = document.querySelector(".select-label");
    const changeLabel = document.querySelector(".change-label");
    const changeSpan = document.querySelector(".change-span");

    topicButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Hide input div with animation
            hideDiv.classList.add("fade-out");
            setTimeout(() => {
                hideDiv.style.display = "none";
            }, 500);

            // Show details div with animation
            showDiv.style.display = "block";
            setTimeout(() => {
                showDiv.classList.add("fade-in");
            }, 10);

            // Hide "Select a topic" and show "Topic Change"
            selectLabel.style.display = "none";
            changeLabel.style.display = "block";

            // Hide all topic buttons except the selected one
            topicButtons.forEach(btn => {
              if (btn === button) {
                  btn.style.display = "inline";
                  btn.style.marginLeft = "0";
                  btn.style.outline = "none"
              } else {
                  btn.style.display = "none";
              }
          });
          
        });
    });

    changeSpan.addEventListener("click", function () {
        // Hide details div with animation
        showDiv.classList.remove("fade-in");
        setTimeout(() => {
            showDiv.style.display = "none";
        }, 500);

        // Show input div with animation
        hideDiv.style.display = "block";
        setTimeout(() => {
            hideDiv.classList.remove("fade-out");
        }, 10);

        // Show all topic buttons
        topicButtons.forEach(btn => {
            btn.style.display = "inline";
        });

        // Show "Select a topic" and hide "Topic Change"
        selectLabel.style.display = "block";
        changeLabel.style.display = "none";
    });
  });

  // --bill pay input field
  document.addEventListener("DOMContentLoaded", function () {
    const billInput = document.getElementById("link_id");
    const dobInput = document.querySelector("input[name='dob']");

    // Function for formatting Bill ID
    billInput.addEventListener("input", function (e) {
        let value = this.value.replace(/\D/g, ""); 
        if (value.length > 12) value = value.slice(0, 12);
        let formattedValue = value.replace(/(\d{4})(\d{4})?(\d{4})?/, function (_, p1, p2, p3) {
            return [p1, p2, p3].filter(Boolean).join(" - ");
        });
        this.value = formattedValue;
    });

    // Function for formatting Date of Birth
    dobInput.addEventListener("input", function (e) {
        let value = this.value.replace(/\D/g, ""); 
        if (value.length > 8) value = value.slice(0, 8);
        let formattedValue = value.replace(/(\d{2})(\d{2})?(\d{4})?/, function (_, p1, p2, p3) {
            return [p1, p2, p3].filter(Boolean).join("/");
        });
        this.value = formattedValue;
    });
});


// ---text to speech --
const playButton = document.getElementById("playButton");
  let isPlaying = false;
  let speechSynthesisInstance = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance();

  playButton.addEventListener("click", () => {
    if (!isPlaying) {
      let textContent = document.querySelector(".speech-content-body").innerText;
      utterance.text = textContent;
      utterance.lang = "en-US";
      utterance.rate = 1;
      utterance.volume = 1;
      
      speechSynthesisInstance.speak(utterance);
      isPlaying = true;
      playButton.classList.remove("fa-circle-play");
      playButton.classList.add("fa-pause");
    } else {
      speechSynthesisInstance.cancel();
      isPlaying = false;
      playButton.classList.remove("fa-pause");
      playButton.classList.add("fa-circle-play");
    }
  });


