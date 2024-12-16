// Variables globales
let currentImageIndex = 0;
let currentModel = '60';

// Imágenes por modelo
const modelImages = {
  '60': [
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO60_persona_usandolo.png",
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO60_foto_limpia.png",
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO60_persona_usandolo.png"
  ],
  '300': [
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO300_persona_usandolo.png",
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO300_foto_limpia.png",
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO300_persona_usandolo.png"
  ],
  '600': [
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO600_persona_usandolo.png",
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO600_foto_limpia.png",
    "imgs_biocrak/imgs_carrito/img_carrusel/BIO600_soporte_pared.png"
  ],
};

// Precios por modelo
const modelPrices = {
  '60': "$850.000 o U$S800",
  '300': "$1.350.000 o U$S1300",
  '600': "$2.450.000 o U$S2400"
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
