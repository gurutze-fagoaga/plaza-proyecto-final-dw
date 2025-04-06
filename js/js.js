const listaIconosMenu = document.querySelectorAll(".Header-icon");
const menu = document.querySelector(".Menu");

const listaBotonesMenu = document.querySelectorAll(".Menu-item");

const btnTalleres = document.querySelector("#BtnTalleres");
const btnEspacio = document.querySelector("#BtnEspacio");
const btnMonthly = document.querySelector("#BtnMonthly");
const btnContacto = document.querySelector("#BtnContacto");




listaIconosMenu.forEach(icono => {
    icono.addEventListener("click", () => {
        menu.classList.toggle("desplegado");

        // ERROR A CORREGIR
        icono.classList.toggle("u-displayNone");  

     
    })
});



listaBotonesMenu.forEach(boton => {
    boton.addEventListener("click", () => {
        boton.classList.add(MenuActivo);
    })
});


