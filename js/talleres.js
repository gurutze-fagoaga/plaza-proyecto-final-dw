// ACTIVAR / DESACTIVAR SECCIONES AL MOVERSE POR EL NAVEGADOR

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


// FORMULARIO DE RESERVA DE TALLERES Y PAGO

const contenedorReserva = document.querySelector("#Reserva-formClase");

const añadirBtn = document.querySelector("#Btn-añadir");
const listaDeHoras = {
    ceramica: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00", "3", "4"],
    joyeria: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    bordado: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    serigrafia: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    escritura: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    encuadernacion: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"]
}


// función de añadir otra clase más

añadirBtn.addEventListener("click", () => {
    añadirClase();
    sumarPrecio();
} );

// función para sumar el precio
function sumarPrecio() {
    let precioTaller = 15;
    let sumaPrecioTotal = 0;
    let sumaPrecioTotal = sumaPrecioTotal + precioTaller;
    
    console.log("El precio total es: " + sumaPrecioTotal);
}


function añadirClase() {
    contenedorReserva.innerHTML += `
    <div id="Reserva-formClase" class="Reserva-formClase">  
        <label>
            <select class="SelectClase Reserva-formInput" name="clase">
                <option id="Clase" value="ceramica">Cerámica</option>
                <option id="Clase" value="joyeria">Joyería de resina</option>
                <option id="Clase" value="bordado">Bordado</option>
                <option id="Clase" value="serigrafia">Serigrafía</option>
                <option id="Clase" value="escritura">Escritura creativa</option>
                <option id="Clase" value="encuadernacion">Encuadernación artesanal</option>
            </select>
        </label>

        <label>
            <select class="Fecha u-displayNone Reserva-formInput" name="hora">
            </select>
            </label>
        <button id="Btn-quitar" class="Btn-quitar Reserva-formInput Reserva-formInput--btn">Eliminar fila</button>

    </div>
    `
    // actualizar las listas cuando añada un nuevo select
    mostrarOpciones()

}



// actualizar las listas 
function mostrarOpciones() {

    // actualiza las listas, para que cada vez que añadamos un selector lo añada a la lista

    const listaSelectoresFecha = document.querySelectorAll(".Fecha");
    const listaSelectoresClase = document.querySelectorAll(".SelectClase");
    const listaBotonesEliminar = document.querySelectorAll(".Btn-quitar");
    // en cada click en el selector de clase, actualizará las opciones de su selector de fecha

    listaSelectoresClase.forEach((selectorClase, id) => {


        // EventListener de "change"

        selectorClase.addEventListener("change", () => {

            let claseSeleccionada = selectorClase.value
            console.log("Has seleccionado la clase " + claseSeleccionada);

            // se muestra el input de hora
            listaSelectoresFecha[id].classList.remove("u-displayNone");
            // se muestra el botón de añadir más
            añadirBtn.classList.remove("u-displayNone");

            // limpiar las opciones anteriores

            listaSelectoresFecha[id].innerHTML = "";

            let horario = listaDeHoras[claseSeleccionada];

            for (let i = 0; i < horario.length; i++) {
                listaSelectoresFecha[id].innerHTML += `
                            <option id="Hora" value="${horario[i]}">${horario[i]}</option>
                        `;
            }
        })


    })

    listaBotonesEliminar.forEach((btnEliminar, id) => {
        btnEliminar.addEventListener("click", (e) => {

            // al hacer click se elimina el div contenedor de clase más cercano
            btnEliminar.closest(".Reserva-formClase").remove();
        })
    })
}


mostrarOpciones();







