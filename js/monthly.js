/*--------------------------------------------------------------------------------*\
* monthly.js
*    Estructura:
*       -Constantes
*       -Varibles
*       -Funciones
*---------------------------------------------------------------------------------*/



// --------------- CONSTANTES Y VARIABLES ------------- //

// selección de los botones de desplegar/plegar cartel
const listaBotones = document.querySelectorAll(".Programa-btn")

// Selección del contenedor del cartel
const cartel = document.querySelector("#Programa-content");


// --------------- FUNCIÓN / EVENT LISTENER ------------- //

// Con el click en el boton se muestra y oculta el cartel (añadiendo/quitando clase)
listaBotones.forEach( boton => {
    boton.addEventListener("click", () => {
        listaBotones.forEach(boton => {

            boton.classList.toggle("u-displayNone");
        })
        cartel.classList.toggle("u-displayNone");

    })
})

