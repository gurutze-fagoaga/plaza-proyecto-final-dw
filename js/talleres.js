const container = document.querySelector("#Main");
const listaTitulos = container.querySelectorAll("#Nav-item");
const listaBloques = container.querySelectorAll("#Contenido-bloque");
const listaPasos = container.querySelectorAll("#Paso");



listaTitulos.forEach((titulo, i) => {
    listaTitulos[i].addEventListener("click", () => {


        // desactivar el botón que estaba activo
        listaTitulos.forEach((titulo, i) => {
            titulo.classList.remove("u-activo");
            listaBloques[i].classList.add("u-displayNone");
        })
        // activar el botón al que se le ha hecho click
        listaTitulos[i].classList.add("u-activo");
        listaBloques[i].classList.remove("u-displayNone");

    })
})


listaPasos.forEach((paso, i) => {
    paso.addEventListener("click", () => {
   
        // desactivar el botón que estaba activo
        listaTitulos.forEach((titulo, i) => {
            titulo.classList.remove("u-activo");
            listaBloques[i].classList.add("u-displayNone");
        })
        // activar el botón al que se le ha hecho click
        listaTitulos[i].classList.add("u-activo");
        listaBloques[i].classList.remove("u-displayNone");

    })
})





