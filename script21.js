const titleElement = document.querySelector(".title_carrito");
const descriptionElement = document.querySelector(".texto_carrito1");
const accessoriesList = document.querySelector(".lista_accesorie");
const priceElement = document.getElementById("price");
const modelButtons = document.querySelectorAll(".model-button");
const carouselContainer = document.querySelector(".carousel-mobile");
const puntosContainer = document.querySelector(".puntos");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let autoScrollInterval;
let autoScrollTimeout;

// Modelos con imágenes internas
const models = {
  "300": {
    title: "BIO 300",
    description: "Panel de 300 LEDs con pantalla táctil, ideal para tratamientos localizados y de medio cuerpo. Una sesión de 12 minutos de frente y 12 de espalda es suficiente para obtener los beneficios de la terapia. Apto para personas de todos los tamaños. A mayor cantidad de LEDs, mayor eficiencia y menos tiempo de exposición.",
    accessories: [
      "1 Panel de luz",
      "2 Pie de apoyo",
      "3 Gafas con filtro de luz",
      "4 Soporte pared",
      "5 Cables de conexión",
    ],
    price: "U$S 1480",
    images: [
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/2.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/3.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/BIO300_persona_en_el_piso.jpg", fondoBlanco: false },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/4.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/5.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/6.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/7.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/BIO300_cuidado_personal.jpg", fondoBlanco: false }
    ]
  },
  "600": {
    title: "BIO 600",
    description: "Panel de 600 LEDs con pantalla táctil, diseñado para tratamientos de cuerpo completo. Permite cubrir todo el cuerpo en sesiones de 12 minutos de frente y 12 de espalda, logrando resultados más rápidos. Ideal para uso profesional o protocolos intensivos. Más LEDs = más potencia, mayor eficiencia y menor tiempo de tratamiento.",
    accessories: [
      "1 Panel de luz",
      "2 Pie de apoyo",
      "3 Gafas con filtro de luz",
      "4 Soporte pared",
      "5 Cables de conexión",
    ],
    price: "U$S 2800",
    images: [
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/1.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/5.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/6.png", fondoBlanco: true },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/10.png", fondoBlanco: false },
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/11.png", fondoBlanco: false }
    ]
  },
  "SoporteBIO": {
    title: "Soporte PRO",
    description: "Es un soporte de piso para utilizar el modelo BIO 600 en diferentes espacios. Se puede utilizar tanto con ruedas como sin ruedas.",
    accessories: [
      "1 Soporte para panel de luz",
      "2 Herramientas instalación"
    ],
    price: "U$S 140",
    images: [
      { src: "imgs_biocrak/imgs_carrito/img_carrusel/8.png", fondoBlanco: false },
      // { src: "imgs_biocrak/imgs_carrito/img_carrusel/paneles_con_soportePRO.jpg", fondoBlanco: false }
    ]
  }
};

function changeModel(model) {
  const selectedModel = models[model];
  titleElement.textContent = selectedModel.title;
  descriptionElement.textContent = selectedModel.description;

  accessoriesList.innerHTML = selectedModel.accessories.map((item) => {
    return `<li class="item_accesorie"><span>${item.split(" ")[0]}</span>${item.substring(2)}</li>`;
  }).join("");

  priceElement.textContent = selectedModel.price;
  updateCarousel(selectedModel.images);

  modelButtons.forEach((button) => button.classList.remove("selected"));
  document.querySelector(`.model-button[onclick="changeModel('${model}')"]`)?.classList.add("selected");

  carouselContainer.scrollTo({ left: 0, behavior: "smooth" });
}

function updateCarousel(images) {
  carouselContainer.innerHTML = "";
  puntosContainer.innerHTML = "";

  images.forEach(({ src, fondoBlanco }, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Imagen ${i}`;
    img.classList.add("carousel-image");
    if (fondoBlanco) img.classList.add("fondo-blanco");

    carouselContainer.appendChild(img);

    const punto = document.createElement("li");
    punto.classList.add("punto");
    if (i === 0) punto.classList.add("activo");

    punto.addEventListener("click", () => {
      if (window.innerWidth <= 992) {
        const scrollAmount = i * carouselContainer.offsetWidth;
        carouselContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });

        document.querySelectorAll(".punto").forEach(p => p.classList.remove("activo"));
        punto.classList.add("activo");
        restartAutoScroll();
      }
    });

    puntosContainer.appendChild(punto);
  });

  carouselContainer.style.display = "flex";
  carouselContainer.style.overflowX = "scroll";
  carouselContainer.style.scrollSnapType = "x mandatory";

  carouselContainer.addEventListener("scroll", () => {
    const scrollPosition = carouselContainer.scrollLeft;
    const containerWidth = carouselContainer.offsetWidth;
    const visibleIndex = Math.round(scrollPosition / containerWidth);
    document.querySelectorAll(".punto").forEach((punto, index) => {
      punto.classList.toggle("activo", index === visibleIndex);
    });
    restartAutoScroll();
  });

  carouselContainer.addEventListener("mouseover", () => clearInterval(autoScrollInterval));
  carouselContainer.addEventListener("mouseout", restartAutoScroll);

  startAutoScroll();
}

function scrollCarousel(direction) {
  const containerWidth = carouselContainer.offsetWidth;
  const currentScroll = Math.round(carouselContainer.scrollLeft / containerWidth) * containerWidth;
  const maxScroll = Math.floor(carouselContainer.scrollWidth / containerWidth - 1) * containerWidth;

  let targetScroll;
  if (direction === 1 && currentScroll >= maxScroll) {
    targetScroll = 0;
  } else if (direction === -1 && currentScroll <= 0) {
    targetScroll = maxScroll;
  } else {
    targetScroll = currentScroll + direction * containerWidth;
  }

  carouselContainer.scrollTo({ left: targetScroll, behavior: "smooth" });
  restartAutoScroll();
}

function startAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = setInterval(() => {
    const containerWidth = carouselContainer.offsetWidth;
    carouselContainer.scrollBy({ left: containerWidth, behavior: "smooth" });
  }, 10000);
}

function restartAutoScroll() {
  clearTimeout(autoScrollTimeout);
  autoScrollTimeout = setTimeout(startAutoScroll, 10000);
}

function adjustVisibility() {
  const isDesktop = window.innerWidth > 992;
  btnLeft.style.display = isDesktop ? "block" : "none";
  btnRight.style.display = isDesktop ? "block" : "none";
  puntosContainer.style.display = isDesktop ? "none" : "block";
}

window.addEventListener("resize", adjustVisibility);
btnLeft.addEventListener("click", () => scrollCarousel(-1));
btnRight.addEventListener("click", () => scrollCarousel(1));

// Inicializar
adjustVisibility();
const initialModel = new URLSearchParams(window.location.search).get("model") || "300";
changeModel(initialModel);
