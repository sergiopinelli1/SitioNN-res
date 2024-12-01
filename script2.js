// Datos de los modelos
const models = {
    '60': {
        images: [
            './copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.03.17.png',
            './copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.03.17.png'
        ],
        title: 'BIO 60',
        description: 'Es el panel más pequeño, pensado para usar en zonas específicas del cuerpo como terapia facial, lesiones, entre otros. Es apto para personas de todos los tamaños.',
        accessories: [
            'Panel de luz',
            'Pie de apoyo',
            'Control remoto',
            'Gafas con filtro de luz',
            'Soporte para colgar',
            'Cables de conexión'
        ],
        price: '$750.000 o U$S750'
    },
    '300': {
        images: [
            './copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.35.26.png',
            './copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.35.26.png'
        ],
        title: 'BIO 300',
        description: 'Un panel intermedio ideal para usuarios que buscan mayor cobertura, adecuado para tratamientos corporales parciales.',
        accessories: [
            'Panel de luz',
            'Pie de apoyo',
            'Control remoto',
            'Gafas con filtro de luz',
            'Soporte para colgar',
            'Cables de conexión'
        ],
        price: '$1.200.000 o U$S1200'
    },
    '600': {
        images: [
            './copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.36.35.png',
            './copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.36.35.png'
        ],
        title: 'BIO 600',
        description: 'El panel más grande para cobertura completa, ideal para usuarios avanzados y profesionales.',
        accessories: [
            'Panel de luz',
            'Pie de apoyo',
            'Control remoto',
            'Gafas con filtro de luz',
            'Soporte para colgar',
            'Cables de conexión'
        ],
        price: '$2.000.000 o U$S2000'
    }
};

// Cambiar modelo
function changeModel(model) {
    const carousel = document.getElementById('carousel');
    const title = document.querySelector('.title_carrito');
    const description = document.querySelector('.texto_carrito1');
    const accessoriesList = document.querySelector('.lista_accesorie');
    const price = document.getElementById('price');

    // Actualizar imágenes del carrusel
    carousel.innerHTML = '';
    models[model].images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${models[model].title} Image`;
        img.classList.add('carousel-image');
        carousel.appendChild(img);
    });

    // Actualizar título y descripción
    title.textContent = models[model].title;
    description.textContent = models[model].description;

    // Actualizar accesorios
    accessoriesList.innerHTML = '';
    models[model].accessories.forEach(accessory => {
        const li = document.createElement('li');
        li.classList.add('item_accesorie');
        li.innerHTML = `<span>${models[model].accessories.indexOf(accessory) + 1}</span>${accessory}`;
        accessoriesList.appendChild(li);
    });

    // Actualizar precio
    price.textContent = models[model].price;

    // Agregar clase "active" al botón seleccionado
    document.querySelectorAll('.model-button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.model-button[onclick="changeModel('${model}')"]`).classList.add('active');
}

// Configurar comportamiento inicial al acceder desde un enlace específico
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedModel = urlParams.get('model') || '60'; // Modelo predeterminado: '60'
    changeModel(selectedModel);
});
