document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
        this.classList.toggle('open');
        const submenu = this.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});