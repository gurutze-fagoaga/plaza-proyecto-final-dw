const container = document.querySelector("#Main");
const listaTitulos = container.querySelectorAll("#Nav-item");
const listaBloques = container.querySelectorAll("#Contenido-bloque");


listaTitulos.forEach((titulo, i) => {
    listaTitulos[i].addEventListener("click", () =>{
        listaTitulos.forEach((titulo, i) => {
            listaTitulos[i].classList.remove("u-activo");
            listaBloques[i].classList.remove("u-activo");
        })
        listaTitulos[i].classList.add("u-activo");
        listaBloques[i].classList.add("u-activo");
    })
})
