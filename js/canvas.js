/*--------------------------------------------------------------------------------*\
* canvas.js
*    Estructura:
*       -Constantes
*       -Funciones y eventListeners
*---------------------------------------------------------------------------------*/

// ---------------------- CONSTANTES --------------------- //

const inicio = document.querySelector("#Principal");
const btnCrear = document.querySelector("#Principal-btn");

const board = document.querySelector("#Board");
const listaBotonesDibujo = board.querySelectorAll(".Controllers-btnColor");

const btnCuadricula = board.querySelector("#BtnCuadricula");
const listaIconosCuadricula = board.querySelectorAll(".IconoCuadricula");
const btnPurple = board.querySelector("#BtnPurple");
const btnYellow = board.querySelector("#BtnYellow");
const btnBlue = board.querySelector("#BtnBlue");
const btnGreen = board.querySelector("#BtnGreen");
const btnBorrar = board.querySelector("#BtnBorrar");
const btnDescargar = board.querySelector("#BtnDescargar");
const btnCerrar = board.querySelector("#BtnCerrar");

const canvas = document.querySelector("#Canvas");
const context = canvas.getContext("2d");

let color = "#874aaf";

let initialX;
let initialY;
let correccionX = 0;
let correccionY = 0;

let posicion = canvas.getBoundingClientRect();

correccionX = posicion.x;
correccionY = posicion.y;
// --------------- FUNCIÓN / EVENT LISTENER ------------- //


// Función para abrir la pizarra con el botón de "crear"

btnCrear.addEventListener("click", () => {
    inicio.style.display = "none";
    board.classList.toggle("u-displayNone");
    // Al cargar llama a esta función para ajustar el tamaño de la pizarra (segun el tamaño de la pantalla)
    resizeCanvas(); 
})

// Función para cerrar la pizarra con el botón de "crear"

btnCerrar.addEventListener("click", () => {
    inicio.style.display = "block";
    board.classList.toggle("u-displayNone");

})

// Función para activar los botones de colores

btnPurple.classList.add("BtnActive");
listaBotonesDibujo.forEach(boton => {
    boton.addEventListener("click", () => {
        listaBotonesDibujo.forEach(boton => {
            boton.classList.remove("BtnActive");
        })
        boton.classList.toggle("BtnActive");
    })
});

// Función del botón de cuadrícula

btnCuadricula.addEventListener("click", () => {
    listaIconosCuadricula.forEach(icono => {
        icono.classList.toggle("u-displayNone");

    })
    board.classList.toggle("CuadriculaActiva");
})

// Función del botón de borrar

btnBorrar.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
})

// Función del botón descargar

btnDescargar.addEventListener("click", () => {
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.download = "imagen_plaza.png"
    enlaceDescarga.href = canvas.toDataURL();
    enlaceDescarga.click();
})


// Función para ajustar las medidas del canvas segun el tamaño de pantalla

function resizeCanvas() {
    canvas.width = canvas.clientWidth;  // Establece el ancho real
    canvas.height = canvas.clientHeight; // Establece la altura real
}

// Cuando la ventana cambia de tamaño (resize) llama a la función de ajustar canvas

window.addEventListener('resize', resizeCanvas);


// Event listeners de cada botón de color, para cambiar el color:

btnPurple.addEventListener("click", () => {
    color = "#874aaf";
})
btnYellow.addEventListener("click", () => {
    color = "#fff82c";
})
btnBlue.addEventListener("click", () => {
    color = "#00658C";
})
btnGreen.addEventListener("click", () => {
    color = "#006d53";
})

// Funcion de dibujar

const dibujar = (cursorX, cursorY) => {
    context.beginPath();
    context.moveTo(initialX, initialY);
    context.lineWidth = 50;
    context.strokeStyle = color; 
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineTo(cursorX, cursorY);
    context.stroke();

    initialX = cursorX;
    initialY = cursorY;
};

// Llama a la función dibujar al hacer click

const mouseDown = (evt) => {
    evt.preventDefault();
    if (evt.changedTouches === undefined) {
        initialX = evt.offsetX;
        initialY = evt.offsetY;
    } else {
        //evita desfase al dibujar
        initialX = evt.changedTouches[0].pageX - correccionX;
        initialY = evt.changedTouches[0].pageY - correccionY;
    }
    dibujar(initialX, initialY);
    canvas.addEventListener("mousemove", mouseMoving);
    canvas.addEventListener('touchmove', mouseMoving);
};

// Dibuja en la posición en el que se mueve

const mouseMoving = (evt) => {
    evt.preventDefault();
    if (evt.changedTouches === undefined) {
        dibujar(evt.offsetX, evt.offsetY);
    } else {
        dibujar(evt.changedTouches[0].pageX - correccionX, evt.changedTouches[0].pageY - correccionY);
    }
};

// Al dejar de pulsar el mouse deja de dibujar

const mouseUp = () => {
    canvas.removeEventListener("mousemove", mouseMoving);
    canvas.removeEventListener("touchmove", mouseMoving);
};

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);

// Para pantallas tactiles
canvas.addEventListener('touchstart', mouseDown);
canvas.addEventListener('touchend', mouseUp);



