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
const listaSelectoresFecha = document.querySelectorAll("#Fecha");
const listaSelectoresClase = document.querySelectorAll("#SelectClase");
const añadirBtn = document.querySelector("#Btn-añadir");
const listaDeHoras = {
    ceramica: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00", "3", "4"],
    joyeria: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    bordado: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    serigrafia: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    escritura: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"],
    encuadernacion: ["Lunes 5 de mayo, 10:00-14:00", "Jueves 8 de mayo, 18:00-20:00"]
}

let claseSeleccionada = "none";



// funcion para añadir las opciones segun el valor del selector de clase

function cargarHorarios(clase) {
    listaSelectoresFecha.forEach(selectorFecha => {
        // se muestra el input de hora
        selectorFecha.classList.remove("u-displayNone");
        // se muestra el botón de añadir más
        añadirBtn.classList.remove("u-displayNone");
        
            // limpiar las opciones anteriores
            selectorFecha.innerHTML = "";

            let horario = listaDeHoras[clase];
        
            for (let i = 0; i < horario.length; i++) {
                selectorFecha.innerHTML += `
                        <option id="Hora" value="${horario[i]}">${horario[i]}</option>
                    `;
            }
    })

}

// en cada click en el selector actualizará el valor de lo seleccionado:
listaSelectoresClase.forEach(selectorClase => {

    selectorClase.addEventListener("click", () => {
    
        let claseSeleccionada = selectorClase.value
        console.log("Has seleccionado la clase " + claseSeleccionada);
        cargarHorarios(claseSeleccionada);
    
    })
})


// añadir más reservas(el codigo de arriba tiene que ir con selectorAll)

añadirBtn.addEventListener("click", añadirClase);
function añadirClase() {

    contenedorReserva.innerHTML+= `

    <div id="Reserva-formClase">
   
        <label>
            <select id="SelectClase" class="Reserva-formInput" name="clase">
                <option id="Clase" value="ceramica">Cerámica</option>
                <option id="Clase" value="joyeria">Joyería de resina</option>
                <option id="Clase" value="bordado">Bordado</option>
                <option id="Clase" value="serigrafia">Serigrafía</option>
                <option id="Clase" value="escritura">Escritura creativa</option>
                <option id="Clase" value="encuadernacion">Encuadernación artesanal</option>
            </select>
        </label>

        <label>
            <select id="Fecha" class="u-displayNone Reserva-formInput" name="hora">
            </select>
    </label>
    </div>
    `

}



