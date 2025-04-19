/*--------------------------------------------------------------------------------*\
* index.js
*    Estructura:
*       -Constantes
*       -Función de acordeón (Q&A)
*       -Función scroll horizontal de la galeria
*---------------------------------------------------------------------------------*/

// --------------- CONSTANTES Y VARIABLES ------------- //


// Selección de todos los items del acordeón
const listaItems = document.querySelectorAll('.About-item');

// Selección del conenedor de las imágenes de la galería
const scrollGaleria = document.querySelector("#Galeria-content");


// --------------- FUNCIÓN / EVENT LISTENER ------------- //


// Función para menú acordeón

// recorro todos los items
listaItems.forEach(item => {
    // añado event listener de click
    item.addEventListener("click", () => {
        // recorro de nuevo todos los items al hacer click y cierra el item que estaba "open"
        listaItems.forEach(item => item.classList.remove("open"));
        // cambia el estado abierto/cerrado al item que le ha hecho click
        item.classList.toggle("open");
    });

});


// Función para galería con scroll horizontal

// añado event listener de "wheel" (rueda de scroll del ratón) al contenido de galería
scrollGaleria.addEventListener('wheel', (e) => {
    // declaro las constantes de la posición final e inicio
    // posicionFinal: si ya llega al final del scroll horizontal 
    const posicionFinal = scrollGaleria.scrollLeft + scrollGaleria.clientWidth >= scrollGaleria.scrollWidth;
    // posicionInicio: si el scroll horizontal está al inicio el valor de "scrollLeft" es 0
    const posicionInicio = scrollGaleria.scrollLeft === 0;


    // Si estamos en la posición final o de inicio del scroll de la galería
    // y estamos haciendo scroll arriba o abajo con el mouse cambiando el "e.deltaY" a mayor o menor de 0 (valor por defecto) cada vez que hacemos scroll
    if (posicionFinal && e.deltaY > 0 || posicionInicio && e.deltaY < 0) {
        // no afecta en nada, sigue el scroll vertical normal
        return;
    // si no está en la posición de inicio ni de final:   
    } else {
        // evita lo que hace por defecto el "wheel" (scroll vertical)
        e.preventDefault();
        // le decimos que haga scroll horizontal
        scrollGaleria.scrollLeft += e.deltaY;
    }

});


