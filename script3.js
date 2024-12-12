const titleElement = document.querySelector(".title_carrito");
const descriptionElement = document.querySelector(".texto_carrito1");
const accessoriesList = document.querySelector(".lista_accesorie");
const priceElement = document.getElementById("price");
const modelButtons = document.querySelectorAll(".model-button");
const carouselImages = document.querySelectorAll(".carousel-image");

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
        images: [0, 1], // Índices de imágenes para BIO 60
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
        images: [2, 3], // Índices de imágenes para BIO 300
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
        images: [4, 5], // Índices de imágenes para BIO 600
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
        .map((item) => `<li class="item_accesorie"><span>${item.split(" ")[0]}</span>${item.substring(2)}</li>`)
        .join("");

    // Cambiar el precio
    priceElement.textContent = selectedModel.price;

    // Actualizar el carrusel (sin eliminar elementos del DOM)
    carouselImages.forEach((img, index) => {
        if (selectedModel.images.includes(index)) {
            img.classList.add("active");
        } else {
            img.classList.remove("active");
        }
    });

    // Cambiar el estado visual del botón seleccionado
    modelButtons.forEach((button) => {
        button.classList.remove("selected");
    });
    document.querySelector(`.model-button[onclick="changeModel('${model}')"]`).classList.add("selected");
  
}

// Configurar el botón seleccionado en la carga inicial
function setInitialModel(model) {
    changeModel(model);
}

// Detectar el modelo desde el parámetro de la URL
const urlParams = new URLSearchParams(window.location.search);
const initialModel = urlParams.get("model") || "60"; // Modelo predeterminado: BIO 60
setInitialModel(initialModel);