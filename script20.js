// Variables para elementos del DOM
const titleElement = document.querySelector(".title_carrito");
const descriptionElement = document.querySelector(".texto_carrito1");
const accessoriesList = document.querySelector(".lista_accesorie");
const priceElement = document.getElementById("price");
const modelButtons = document.querySelectorAll(".model-button");
const carouselImages = document.querySelectorAll(".carousel-image");
const carouselContainer = document.querySelector(".carousel-mobile");
const puntosContainer = document.querySelector(".puntos");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let autoScrollInterval;
let autoScrollTimeout;

// Modelos y configuración
const models = {
    // "60": {
    //     title: "BIO 60",
    //     description: "Es el panel más pequeño, pensado para usar en zonas específicas del cuerpo como terapia facial, lesiones, entre otros. Es apto para personas de todos los tamaños.",
    //     accessories: [
    //         "1 Panel de luz",
    //         "2 Pie de apoyo",
    //         "3 Gafas con filtro de luz",
    //         "4 Soporte pared",
    //         "5 Cables de conexión",
    //     ],
    //     price: "$850.000 o U$S800",
    //     images: [0, 1, 2],
    // },
    "300": {
        title: "BIO 300",
        description: "Es un panel mediano, ideal para zonas más amplias del cuerpo y para tratamientos generales. Es apto para personas de todos los tamaños. Apto solo uso indoor.",
        accessories: [
            "1 Panel de luz",
            "2 Pie de apoyo",
            "3 Gafas con filtro de luz",
            "4 Soporte pared",
            "5 Cables de conexión",
        ],
        // price: "$1.600.000 o U$S1350",
        images: [3, 4, 5],
    },
    "600": {
        title: "BIO 600",
        description: "Es el panel más grande, diseñado para cubrir áreas completas del cuerpo, ideal para uso profesional o tratamientos intensivos. Es apto para todos los tamaños. Apto solo uso indoor",
        accessories: [
            "1 Panel de luz",
            "2 Pie de apoyo",
            "3 Gafas con filtro de luz",
            "4 Soporte pared",
            "5 Cables de conexión",
        ],
        // price: "$3.200.000 o U$S2700",
        images: [6, 7, 8],
    },
    "SoporteBIO": {
        title: "Soporte BIO",
        description: "Es un soporte para darle posiciones tanto al panel BIO 300 como al panel BIO 600. Con el se pueden poner tanto los paneles de forma horizontal como en forma vertical.",
        accessories: [
            "1 Soporte para panel de luz",
        ],
        // price: "$300000 o U$S250",
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

    // Reiniciar el carrusel a la primera imagen del nuevo modelo
    carouselContainer.scrollTo({ left: 0, behavior: "smooth" });

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
            if (window.innerWidth <= 992) {
                const scrollAmount = i * carouselContainer.offsetWidth;
                carouselContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });

                // Actualizar estado visual de los puntos
                document.querySelectorAll(".punto").forEach((p) => p.classList.remove("activo"));
                punto.classList.add("activo");

                restartAutoScroll();
            }
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

function scrollCarousel(direction) {
    const containerWidth = carouselContainer.offsetWidth;
    const currentScroll = Math.round(carouselContainer.scrollLeft / containerWidth) * containerWidth;
    const maxScroll = Math.floor(carouselContainer.scrollWidth / containerWidth - 1) * containerWidth;

    let targetScroll;
    if (direction === 1 && currentScroll >= maxScroll) {
        // Si estamos en la última imagen, volver al inicio
        targetScroll = 0;
    } else if (direction === -1 && currentScroll <= 0) {
        // Si estamos en la primera imagen, ir al final
        targetScroll = maxScroll;
    } else {
        // Scroll normal
        targetScroll = currentScroll + direction * containerWidth;
    }

    carouselContainer.scrollTo({ left: targetScroll, behavior: "smooth" });
    restartAutoScroll();
}
// Configurar auto-scroll del carrusel
function startAutoScroll() {
    clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
        // Desplazamiento suave con scrollTo
        const containerWidth = carouselContainer.offsetWidth;
        carouselContainer.scrollBy({ left: containerWidth, behavior: "smooth" });
    }, 10000);
}

function restartAutoScroll() {
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = setTimeout(startAutoScroll, 10000);
}

// Habilitar/deshabilitar flechas y puntos según el ancho de la pantalla
function adjustVisibility() {
    if (window.innerWidth > 992) {
        btnLeft.style.display = "block";
        btnRight.style.display = "block";
    } else {
        btnLeft.style.display = "none";
        btnRight.style.display = "none";
    }

    puntosContainer.style.display = window.innerWidth > 992 ? "none" : "block";
}

// Ajustar visibilidad al cargar la página y al redimensionar
window.addEventListener("resize", adjustVisibility);
adjustVisibility();

// Listeners para las flechas
btnLeft.addEventListener("click", () => scrollCarousel(-1));
btnRight.addEventListener("click", () => scrollCarousel(1));

// Configurar el modelo inicial
const urlParams = new URLSearchParams(window.location.search);
// const initialModel = urlParams.get("model") || "60";
const initialModel = urlParams.get("model") || "300";
changeModel(initialModel);
