// Variables globales
let currentImageIndex = 0;
let currentModel = '60';

// Imágenes por modelo
const modelImages = {
  '60': [
    "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.03.17.png",
    "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.03.17.png"
  ],
  '300': [
    "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.35.26.png",
    "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.35.26.png"
  ],
  '600': [
    "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.36.35.png",
    "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.36.35.png"
  ]
};

// Precios por modelo
const modelPrices = {
  '60': "$750.000 o U$S750",
  '300': "$1.300.000 o U$S1300",
  '600': "$2.500.000 o U$S2500"
};

// Cambiar modelo
function changeModel(model) {
  currentModel = model;
  currentImageIndex = 0; // Reiniciar índice
  updateCarousel();
  updatePrice();
}

// Actualizar precio
function updatePrice() {
  const priceElement = document.getElementById("price");
  priceElement.textContent = modelPrices[currentModel];
}

// Actualizar carrusel
function updateCarousel() {
  const images = document.querySelectorAll(".carousel-image");
  images.forEach((img, index) => {
    img.src = modelImages[currentModel][index % modelImages[currentModel].length];
    img.classList.remove("active");
  });
  images[currentImageIndex].classList.add("active");
}

// Imagen anterior
function prevImage() {
  const totalImages = modelImages[currentModel].length;
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Imagen siguiente
function nextImage() {
  const totalImages = modelImages[currentModel].length;
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  updateCarousel();
}

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
  updateCarousel();
  updatePrice();
});
