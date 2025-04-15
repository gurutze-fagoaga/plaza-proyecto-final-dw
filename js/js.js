const listaIconosMenu = document.querySelectorAll(".Header-icon");
const menu = document.querySelector(".Menu");
const listaBotonesMenu = document.querySelectorAll(".Menu-item");


listaIconosMenu.forEach(icono => {

   
    icono.addEventListener("click", () => {
        menu.classList.toggle("desplegado");

        listaIconosMenu.forEach(icono => {
            icono.classList.toggle("u-displayNone"); 
            icono.classList.toggle("desplegado");
        })

       

    })
});





