// Agregar evento de clic a cada toggle del submenú
document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
        this.classList.toggle('open');
        const submenu = this.nextElementSibling;

        // Alternar visibilidad del submenú
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});


// Función para asegurar que el checkbox no afecte en pantallas grandes
function resetMenuToggleOnLargeScreens() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const mediaQuery = window.matchMedia('(min-width: 992px)');

    if (menuToggle && mediaQuery.matches) {
        menuToggle.checked = false; // Resetear el estado del checkbox
    }

    // Escuchar clics fuera del menú en pantallas grandes para desmarcar
    document.addEventListener('click', (e) => {
        if (mediaQuery.matches && !navbar.contains(e.target)) {
            menuToggle.checked = false;
        }
    });
}

// Ejecutar al cargar y al cambiar el tamaño de la ventana
resetMenuToggleOnLargeScreens();
window.addEventListener('resize', resetMenuToggleOnLargeScreens);