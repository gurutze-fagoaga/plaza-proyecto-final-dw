/*--------------------------------------------------------------------------------*\
* js.js
*    Estructura:
*       -Constantes
*       -Varibles
*       -Funciones
*---------------------------------------------------------------------------------*/




// ------------------------- CONSTANTES Y VARIABLES ------------------------------- //

// Selección del botón de subir
const btnSubir = document.querySelector("#Main-subir");
// Selección de los iconos del menu hamburguesa (boton para abrir y cerrar menu)
const listaIconosMenu = document.querySelectorAll(".Header-icon");
// Selección del menu
const menu = document.querySelector(".Menu");
// Selección de los items de la lista del menu
const listaBotonesMenu = document.querySelectorAll(".Menu-item");


// Función para mostrar el botón de subir arriba
// añado event listener de "wheel" (rueda de scroll del ratón) al documento
function mostrarBotonSubir() {
    
}
document.addEventListener('scroll', (e) => {
    // si el scroll no está al inicio (!=0) 
    if (window.scrollY != 0){
        // se muestra el botón
        btnSubir.classList.remove("u-displayNone") 
    // si está al inicio
    } else {
        // añade el botón
        btnSubir.classList.add("u-displayNone") 
    }
    
});
// Función para hacer scroll arriba con el botón de subir
btnSubir.addEventListener("click", () => {
    window.scrollTo(0,0)
    btnSubir.classList.add("u-displayNone")  
})


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











