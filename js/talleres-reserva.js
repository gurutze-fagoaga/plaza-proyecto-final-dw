/*--------------------------------------------------------------------------------*\
* talleres-reserva.js
*    Estructura:
*       -Constantes
*       -Varibles
*       -Funciones
*       -Ejecución
*---------------------------------------------------------------------------------*/





// ------------------------- CONSTANTES Y VARIABLES ------------------------------- //

/* 
* Objeto que representa las clases y las horas disponibles de cada uno en arrays.
* @typedef {Object} agendaTalleres
* @property {array} ceramica
* @property {array} joyeria
* @property {array} bordado
* @property {array} serigrafia
* @property {array} escritura
* @property {array} encuadernacion
*/
const agendaTalleres = {
    ceramica: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00", "3", "4"],
    joyeria: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    bordado: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    serigrafia: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    escritura: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    encuadernacion: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"]
}

// Selección del div contenedor del formulario reserva de clase 
const contenedorReserva = container.querySelector("#Reserva-formClase");

// Selección del botón de "añadir clase" 
const añadirBtn = container.querySelector("#Btn-añadir");

// Selección del botón de "añadir clase" 
const desglosePrecio = container.querySelector("#Reserva-desglose");

// Selección del contenedor del texto que mostrará el precio total a pagar
const contenedorPrecioTotal = container.querySelector("#Reserva-total");

// Selección de mi formulario completo
const formulario = container.querySelector("#Reserva-form");

// Declaramos el precio por taller
const precioTaller = 15;

// Valor inicial de la variable de la cantidad de talleres a reservar
let cantTalleres = 1;

// Valor inicial de la variable de precio total de las clases reservadas ( por defecto 1 clase )
let precioTotal = 15;






// ------------------------- FUNCIONES Y EVENT LISTENERS -------------------------- //

/* Función para mostrar las opciones de los selectores de fecha asociados a cada taller:

   - Muestra los horarios de cada taller
   - Opción de añadir más talleres a la reserva
   - Eliminar filas
   - Actualiza los precios en cada suma/resta de reserva

*/

function mostrarOpciones() {

    // Selección de la lista de los inputs selectores de Clase
    const listaSelectoresClase = document.querySelectorAll(".SelectClase");
    // Selección de la lista de los inputs selectores de Fecha
    const listaSelectoresFecha = document.querySelectorAll(".Fecha");
    // Selección del botón de Elimiar Clase
    const listaBotonesEliminar = document.querySelectorAll(".Btn-quitar");


    // Recorre cada input selector de clase de la lista
    listaSelectoresClase.forEach((selectorClase, id) => {
        // Añade el EventListener de "change", para que ejecute la función al seleccionar una opción
        selectorClase.addEventListener("change", () => {
            // declara la variable clase seleccionada segun el valor del input
            let claseSeleccionada = selectorClase.value
            console.log("Has seleccionado la clase " + claseSeleccionada);
            // después de elegir una clase se muestra el input de hora
            listaSelectoresFecha[id].classList.remove("u-displayNone");
            // también se muestra el botón de añadir más
            añadirBtn.classList.remove("u-displayNone");

            // limpiar las opciones anteriores para añadir sus opciones correspondientes
            listaSelectoresFecha[id].innerHTML = "";

            // variable de horario (array), dentro del objeto selecciona el array que le interesa
            let horario = agendaTalleres[claseSeleccionada];
            // imprime dentro del input selector de fecha cada elemento del array
            for (let i = 0; i < horario.length; i++) {
                listaSelectoresFecha[id].innerHTML += `
                            <option id="Hora" value="${horario[i]}">${horario[i]}</option>
                        `;
            }

            // Al seleccionar la clase se actualiza el precio
            actualizarPrecio();
        })


    })

    // Event listener del botón eliminar
    listaBotonesEliminar.forEach(btnEliminar => {
        btnEliminar.addEventListener("click", () => {

            // al hacer click se elimina el div contenedor de clase más cercano
            btnEliminar.closest(".Reserva-formClase").remove();

            // decrementa la cantidad de talleres
            cantTalleres--;
            // actualiza el precio 
            actualizarPrecio();
        })
    })
}


// Función de añadir otra clase más

function añadirClase() {
    // imprime un nuevo input de clase, horario y botón
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
}

/* Event listener del botón de añadir: 
  - llama a la función de añadir clase
  - incrementa la cantidad de talleres
*/

añadirBtn.addEventListener("click", () => {
    añadirClase();
    cantTalleres++;

    // actualizar las listas cuando añada un nuevo select
    mostrarOpciones();
} );



// Función para sumar el precio total e imprimirlo en su contenedor

function actualizarPrecio() {
    // multiplica el nº de talleres (variable que va incrementando y decrementando segun se añadan clases) con el precio por taller (precio fijo)
    let precioTotal = cantTalleres * precioTaller;
    console.log("El precio total es: " + precioTotal);
    // los imprime en cada contenedor
    desglosePrecio.innerHTML = `${cantTalleres} x ${precioTaller},00€`
    contenedorPrecioTotal.innerHTML = `Total a pagar: ${precioTotal},00€`
}


// Event listener de "submit", para que salte la alerta al enviar el formulario
formulario.addEventListener("submit", () => {
    alert("¡Reserva realizada! Recibirás la confirmación de tu reserva en tu bandeja de entrada del mail. ¡Te esperamos en Plaza!");
})




// ------------------------- EJECUTA LA FUNCIÓN -------------------------- //

mostrarOpciones();







