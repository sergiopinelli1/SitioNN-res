// Variables para elementos del DOM
const titleElement = document.querySelector(".title_carrito");
const descriptionElement = document.querySelector(".texto_carrito1");
const accessoriesList = document.querySelector(".lista_accesorie");
const priceElement = document.getElementById("price");
const modelButtons = document.querySelectorAll(".model-button");
const carouselImages = document.querySelectorAll(".carousel-image");
const carouselContainer = document.querySelector(".carousel-mobile");
const puntosContainer = document.querySelector(".puntos");

let autoScrollInterval;
let autoScrollTimeout;

// Modelos y configuración
const models = {
    "60": {
        title: "BIO 60",
        description: "Es el panel más pequeño, pensado para usar en zonas específicas del cuerpo como terapia facial, lesiones, entre otros. Es apto para personas de todos los tamaños.",
        accessories: [
            "1 Panel de luz",
            "2 Pie de apoyo",
            "3 Control remoto",
            "4 Gafas con filtro de luz",
            "5 Soporte pared",
            "6 Cables de conexión",
        ],
        price: "$850.000 o U$S800",
        images: [0, 1, 2],
    },
    "300": {
        title: "BIO 300",
        description: "Es un panel mediano, ideal para zonas más amplias del cuerpo y para tratamientos generales en casa. Es apto para personas de todos los tamaños.",
        accessories: [
            "1 Panel de luz",
            "2 Pie de apoyo",
            "3 Control remoto",
            "4 Gafas con filtro de luz",
            "5 Soporte pared",
            "6 Cables de conexión",
        ],
        price: "$1.400.000 o U$S1300",
        images: [3, 4, 5],
    },
    "600": {
        title: "BIO 600",
        description: "Es el panel más grande, diseñado para cubrir áreas completas del cuerpo, ideal para uso profesional o tratamientos intensivos.",
        accessories: [
            "1 Panel de luz",
            "2 Pie de apoyo",
            "3 Control remoto",
            "4 Gafas con filtro de luz",
            "5 Soporte pared",
            "6 Cables de conexión",
        ],
        price: "$2.500.000 o U$S2400",
        images: [6, 7, 8],
    },
};

// Cambiar el modelo al seleccionar un botón
function changeModel(model) {
    const selectedModel = models[model];

    // Cambiar el título y descripción
    titleElement.textContent = selectedModel.title;
    descriptionElement.textContent = selectedModel.description;

    // Actualizar accesorios
    accessoriesList.innerHTML = selectedModel.accessories
        .map((item) => `<li class=\"item_accesorie\"><span>${item.split(" ")[0]}</span>${item.substring(2)}</li>`)
        .join("");

    // Cambiar el precio
    priceElement.textContent = selectedModel.price;

    // Actualizar el carrusel
    updateCarousel(selectedModel.images);

    // Reiniciar la posición del carrusel
    carouselContainer.scrollTo({ left: 0, behavior: "smooth" });

    // Asegurar que el primer punto esté activo
    const puntos = document.querySelectorAll(".punto");
    puntos.forEach((punto, index) => {
        punto.classList.toggle("activo", index === 0);
    });

    // Cambiar el estado visual del botón seleccionado
    modelButtons.forEach((button) => {
        button.classList.remove("selected");
    });
    document.querySelector(`.model-button[onclick="changeModel('${model}')"]`).classList.add("selected");
}

// Actualizar el carrusel y los puntos
function updateCarousel(imageIndexes) {
    carouselContainer.innerHTML = ""; // Limpiar el carrusel
    puntosContainer.innerHTML = ""; // Limpiar los puntos

    imageIndexes.forEach((index, i) => {
        // Agregar imágenes al carrusel
        const img = carouselImages[index].cloneNode(true);
        img.classList.add("active");
        carouselContainer.appendChild(img);

        // Crear puntos para el carrusel
        const punto = document.createElement("li");
        punto.classList.add("punto");
        if (i === 0) punto.classList.add("activo");

        // Agregar funcionalidad al punto
        punto.addEventListener("click", () => {
            const scrollAmount = i * carouselContainer.offsetWidth;
            carouselContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });

            // Actualizar estado visual de los puntos
            document.querySelectorAll(".punto").forEach((p) => p.classList.remove("activo"));
            punto.classList.add("activo");

            restartAutoScroll();
        });

        puntosContainer.appendChild(punto);
    });

    // Configurar scroll-snap para el carrusel
    carouselContainer.style.display = "flex";
    carouselContainer.style.overflowX = "scroll";
    carouselContainer.style.scrollSnapType = "x mandatory";

    // Listener para el scroll del carrusel
    carouselContainer.addEventListener("scroll", () => {
        const scrollPosition = carouselContainer.scrollLeft;
        const containerWidth = carouselContainer.offsetWidth;

        // Determinar el índice de la imagen visible
        const visibleIndex = Math.round(scrollPosition / containerWidth);

        // Actualizar estado activo de los puntos
        document.querySelectorAll(".punto").forEach((punto, index) => {
            punto.classList.toggle("activo", index === visibleIndex);
        });

        restartAutoScroll();
    });

    // Detener auto-scroll si el usuario interactúa con el carrusel
    carouselContainer.addEventListener("mouseover", () => clearInterval(autoScrollInterval));
    carouselContainer.addEventListener("mouseout", restartAutoScroll);

    startAutoScroll();
}

// Configurar el modelo inicial
function setInitialModel(model) {
    changeModel(model);
}

// Detectar el modelo desde el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const initialModel = urlParams.get("model") || "60"; // Modelo predeterminado: BIO 60
setInitialModel(initialModel);

// Configurar auto-scroll del carrusel
function startAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
        const scrollPosition = carouselContainer.scrollLeft;
        const containerWidth = carouselContainer.offsetWidth;
        const maxScroll = carouselContainer.scrollWidth - containerWidth;

        if (scrollPosition < maxScroll) {
            carouselContainer.scrollBy({ left: containerWidth, behavior: "smooth" });
        } else {
            carouselContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, 10000);
}

function restartAutoScroll() {
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = setTimeout(startAutoScroll, 2000);
}
