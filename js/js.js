const listaBotonesMenu = document.querySelectorAll(".Menu-item");

const btnTalleres = document.querySelector("#BtnTalleres");
const btnEspacio = document.querySelector("#BtnEspacio");
const btnMonthly = document.querySelector("#BtnMonthly");
const btnContacto = document.querySelector("#BtnContacto");




listaBotonesMenu.forEach(boton => {
    boton.addEventListener("click",  () => {
        boton.classList.add(MenuActivo);
    })
});
