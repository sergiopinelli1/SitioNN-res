document.addEventListener("DOMContentLoaded", () => {
  const models = {
    bio60: [
      "img/bio60-1.jpg",
      "img/bio60-2.jpg",
      "img/bio60-3.jpg",
    ],
    bio300: [
      "img/bio300-1.jpg",
      "img/bio300-2.jpg",
      "img/bio300-3.jpg",
    ],
    bio600: [
      "img/bio600-1.jpg",
      "img/bio600-2.jpg",
      "img/bio600-3.jpg",
    ],
  };

  const carouselContainer = document.getElementById("carousel-container");
  const buttons = document.querySelectorAll(".model-selector button");

  let interval;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const model = button.dataset.model;
      renderCarousel(models[model]);
    });
  });

  function renderCarousel(images) {
    clearInterval(interval);
    carouselContainer.innerHTML = `
      <div class="carousel active">
        ${images.map((src) => `<img src="${src}" alt="Imagen de carrusel">`).join("")}
      </div>
      <div class="nav-buttons">
        ${images.map((_, idx) => `<button data-index="${idx}"></button>`).join("")}
      </div>
    `;

    const carousel = document.querySelector(".carousel");
    const navButtons = document.querySelectorAll(".nav-buttons button");
    navButtons[0].classList.add("active");

    let currentIndex = 0;

    function changeSlide(index) {
      carousel.scrollTo({
        left: carousel.offsetWidth * index,
        behavior: "smooth",
      });
      navButtons.forEach((btn) => btn.classList.remove("active"));
      navButtons[index].classList.add("active");
    }

    navButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentIndex = Number(btn.dataset.index);
        changeSlide(currentIndex);
      });
    });

    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      changeSlide(currentIndex);
    }, 3000);
  }
});
