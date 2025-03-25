// Obtener elementos
const menuButton = document.getElementById("menu-open");
const closeButton = document.getElementById("menu-close");
const navbar = document.getElementById("navbar");
const backdrop = document.getElementById("backdrop");

// Abrir el menú
menuButton.addEventListener("click", () => {
    navbar.classList.add("open"); // Agrega la clase 'open' para mostrar el menú
    backdrop.classList.remove("hidden"); // Muestra el fondo de pantalla
    menuButton.setAttribute("aria-expanded", "true");
    closeButton.setAttribute("aria-expanded", "false");
});

// Cerrar el menú
closeButton.addEventListener("click", () => {
    navbar.classList.remove("open"); // Elimina la clase 'open' para ocultar el menú
    backdrop.classList.add("hidden"); // Oculta el fondo de pantalla
    menuButton.setAttribute("aria-expanded", "false");
    closeButton.setAttribute("aria-expanded", "true");
});
