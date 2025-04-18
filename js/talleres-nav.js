// --------------- CONSTANTES Y VARIABLES ------------- //

// Selección del main o contenedor principal
const container = document.querySelector("#Main");

// Selección de todos los titulos del menú de navegación dentro de "Talleres"
const listaTitulos = container.querySelectorAll("#Nav-item");

// Selección de todos los bloques o secciones de la página de "Talleres"
const listaBloques = container.querySelectorAll("#Contenido-bloque");

// Selección de los pasos a seguir para reservar un taller
const listaPasos = container.querySelectorAll("#Paso");




// --------------- FUNCIONES Y EVENT LISTENERS ------------- //

// Función para activar/desactivar secciones y titulos al navegar por los pasos del inicio de la página Talleres (añadiendo o quitando clases)

// recorro cada "paso"
listaPasos.forEach((paso, i) => {
    // a cada paso le añado un evento de "click"
    paso.addEventListener("click", () => {
        // recorro cada titulo
        listaTitulos.forEach((titulo, id) => {
            // desactivo el titulo y bloque que estaba activo
            titulo.classList.remove("u-activo");
            listaBloques[id].classList.add("u-displayNone");
        })
        // activo el botón y bloque al que se le ha hecho click
        listaTitulos[i].classList.add("u-activo");
        listaBloques[i].classList.remove("u-displayNone");
    })
})

// Función para activar/desactivar secciones y titulos al navegar por el nav de "talleres", "calendario", "eventos" (añadiendo o quitando clases)
listaTitulos.forEach((titulo, i) => {
    listaTitulos[i].addEventListener("click", () => {
        // desactivo el titulo y bloque que estaba activo
        listaTitulos.forEach((titulo, i) => {
            titulo.classList.remove("u-activo");
            listaBloques[i].classList.add("u-displayNone");
        })
        // activo el titulo y bloque al que se le ha hecho click
        listaTitulos[i].classList.add("u-activo");
        listaBloques[i].classList.remove("u-displayNone");
    })
})



