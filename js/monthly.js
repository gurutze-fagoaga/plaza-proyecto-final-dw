const listaBotones = document.querySelectorAll("#Programa-btn")
const cartel = document.querySelector("#Programa-content");

listaBotones.forEach( boton => {
    boton.addEventListener("click", () => {
        listaBotones.forEach(boton => {

            boton.classList.toggle("u-displayNone");
        })
        cartel.classList.toggle("u-displayNone");

    })
})

