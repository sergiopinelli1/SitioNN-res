// Variables para manejar el estado del carrusel
let currentImageIndex = 0;
let currentModel = '300';

// Imágenes de cada modelo
const modelImages = {
  '300': [
    "./img_carrito/biomax-rlt_BIOMAX-300_grande.png",
    "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.03.17.png"
  ],
  '450': [
    "./img_carrito/biomax-rlt_BIOMAX-300_grande.png",
    "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.35.26.png"
  ],
  '600': [
    "./img_carrito/WallMountBracket_CloseUp_BIOMAX900-v3_blueandredlightson_0728fbe9-fcc7-47f0-99e1-4df4b4fbd8c8_1000x1000.jpg",
    "copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.36.35.png"
  ]
};

// Precios de cada modelo
const modelPrices = {
  '300': "$659",
  '450': "$999",
  '600': "$1299",
  '900': "$1599"
};

// Función para cambiar el modelo
function changeModel(model, price) {
  currentModel = model;
  currentImageIndex = 0; // Reiniciar índice de imagen al cambiar de modelo
  updateCarousel();
  updatePrice(price);
}

// Función para actualizar el precio en el DOM
function updatePrice(price) {
  document.getElementById("price").textContent = price;
}

// Función para actualizar el carrusel de imágenes
function updateCarousel() {
  const carouselImage = document.querySelector(".carousel-image");
  carouselImage.src = modelImages[currentModel][currentImageIndex];
}

// Función para mostrar la imagen anterior en el carrusel
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + modelImages[currentModel].length) % modelImages[currentModel].length;
  updateCarousel();
}

// Función para mostrar la siguiente imagen en el carrusel
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % modelImages[currentModel].length;
  updateCarousel();
}

// Inicializar el carrusel al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
});

