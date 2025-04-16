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


const contenedorReserva = document.querySelector("#Reserva-formClase");
const selectorFecha = document.querySelector("#Fecha");
const selectorClase = document.querySelector("#SelectClase");

const listaDeHoras = {
    ceramica: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    joyeria: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    bordado: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    serigrafia: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    escritura: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    encuadernacion: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"]
}


let claseSeleccionada = "none"

// en cada click en el selector actualizará el valor de lo seleccionado:

selectorClase.addEventListener("click", () => {

    let claseSeleccionada = selectorClase.value
    console.log(claseSeleccionada);

    
    selectorFecha.classList.remove("u-displayNone");

})

// funcion para añadir las opciones segun el valor del selector de clase

console.log(selectorClase[1].value);

console.log(listaDeHoras.ceramica[1]);


for(i=0 ; i< listaDeHoras.ceramica.length; i++){

    selectorFecha.innerHTML+= `
          <option id="Hora" value="${listaDeHoras.ceramica[i]}">${listaDeHoras.ceramica[i]}</option>
    `
}




