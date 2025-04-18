// ------------------------- CONSTANTES Y VARIABLES ------------------------------- //

// Selección de los iconos del menu hamburguesa (boton para abrir y cerrar menu)
const listaIconosMenu = document.querySelectorAll(".Header-icon");
// Selección del menu
const menu = document.querySelector(".Menu");
// Selección de los items de la lista del menu
const listaBotonesMenu = document.querySelectorAll(".Menu-item");

// Función para desplegar y plegar el menu hamburguesa
// recorre los iconos
listaIconosMenu.forEach(icono => {
    // añade el eventListener de click
    icono.addEventListener("click", () => {
        // añade/quita la clase desplegado
        menu.classList.toggle("desplegado");

        // cambia la visibilidad de los iconos de abrir/cerrar
        listaIconosMenu.forEach(icono => {
            icono.classList.toggle("u-displayNone"); 
            icono.classList.toggle("desplegado");
        })
    })
});








