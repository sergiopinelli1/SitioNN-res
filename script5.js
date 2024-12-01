document.addEventListener("DOMContentLoaded", () => {
    const models = {
        "60": {
            title: "BIO 60",
            description: "Es el panel más pequeño, pensado para usar en zonas específicas del cuerpo como terapia facial, lesiones, entre otros. Es apto para personas de todos los tamaños.",
            accessories: [
                "1 Panel de luz",
                "2 Pie de apoyo",
                "3 Control remoto",
                "4 Gafas con filtro de luz",
                "5 Soporte para colgar",
                "6 Cables de conexión",
            ],
            price: "$750.000 o U$S750",
            images: [
                "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.03.17.png",
                "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.03.17.png",
            ],
        },
        "300": {
            title: "BIO 300",
            description: "Ideal para terapias más extensas, cubriendo grandes áreas del cuerpo, como piernas, espalda, o para usar en sesiones grupales pequeñas.",
            accessories: [
                "1 Panel de luz",
                "2 Soporte ajustable",
                "3 Control remoto avanzado",
                "4 Gafas protectoras premium",
                "5 Kit de montaje adicional",
            ],
            price: "$1.200.000 o U$S1200",
            images: [
                "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.35.26.png",
                "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.35.26.png",
            ],
        },
        "600": {
            title: "BIO 600",
            description: "El panel más grande, diseñado para tratamientos intensivos y profesionales, abarcando todo el cuerpo con máxima eficacia.",
            accessories: [
                "1 Panel de luz",
                "2 Estructura móvil",
                "3 Control remoto avanzado",
                "4 Gafas de seguridad",
                "5 Soporte ajustable robusto",
            ],
            price: "$2.100.000 o U$S2100",
            images: [
                "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.36.35.png",
                "./copia_img_productos/Captura de pantalla 2024-10-30 a la(s) 16.36.35.png",
            ],
        },
    };

    const carousel = document.getElementById("carousel");
    const titleElement = document.querySelector(".title_carrito");
    const descriptionElement = document.querySelector(".texto_carrito1");
    const accessoriesList = document.querySelector(".lista_accesorie");
    const priceElement = document.getElementById("price");
    const modelButtons = document.querySelectorAll(".model-button");

    // Detect preselected model from URL
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedModel = urlParams.get("model") || "60";

    const updateUI = (modelKey) => {
        const model = models[modelKey];

        // Update carousel images
        carousel.innerHTML = model.images
            .map((src) => `<img src="${src}" class="carousel-image" alt="${model.title} Image">`)
            .join("");

        // Update title, description, accessories, and price
        titleElement.textContent = model.title;
        descriptionElement.textContent = model.description;
        accessoriesList.innerHTML = model.accessories
            .map((item) => `<li class="item_accesorie"><span>${item.split(" ")[0]}</span>${item.slice(1)}</li>`)
            .join("");
        priceElement.textContent = model.price;

        // Highlight selected button
        modelButtons.forEach((button) => {
            if (button.textContent.includes(model.title)) {
                button.classList.add("selected");
            } else {
                button.classList.remove("selected");
            }
        });
    };

    // Attach event listeners to model buttons
    modelButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modelKey = button.textContent.split(" ")[1]; // Extract "60", "300", "600"
            updateUI(modelKey);
        });
    });

    // Initial load
    updateUI(preselectedModel);
});
