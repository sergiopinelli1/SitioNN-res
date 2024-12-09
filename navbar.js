// Agregar evento de clic a cada toggle del submenú
// document.querySelectorAll('.submenu-toggle').forEach(toggle => {
//     toggle.addEventListener('click', function () {
//         this.classList.toggle('open');
//         const submenu = this.nextElementSibling;

//         submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//     });
// });

// Definir el breakpoint de pantallas grandes
const mediaQuery = window.matchMedia('(max-width: 991px)'); 

// Función para habilitar o deshabilitar el evento
function toggleSubmenuEvents(e) {
    if (e.matches) {
        // Pantallas pequeñas: Agregar evento
        document.querySelectorAll('.submenu-toggle').forEach(toggle => {
            toggle.addEventListener('click', handleToggle);
        });
    } else {
        // Pantallas grandes: Remover evento
        document.querySelectorAll('.submenu-toggle').forEach(toggle => {
            toggle.removeEventListener('click', handleToggle);
        });
    }
}

// Función de manejo del evento de clic
function handleToggle() {
    this.classList.toggle('open');
    const submenu = this.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// Registrar el evento inicial y escuchar cambios en el tamaño
toggleSubmenuEvents(mediaQuery);
mediaQuery.addListener(toggleSubmenuEvents);
