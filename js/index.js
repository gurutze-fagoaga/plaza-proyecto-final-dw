// JS para PIZARRA

// Variables y constantes

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


// abrir y cerrar la pizarra

btnCrear.addEventListener("click", () => {
    inicio.style.display = "none";
    board.classList.toggle("u-displayNone");
    resizeCanvas(); // Llama a esta función para ajustar al cargar

})

btnCerrar.addEventListener("click", () => {
    inicio.style.display = "block";
    board.classList.toggle("u-displayNone");

})

// función para activar los botones de colores

btnPurple.classList.add("BtnActive");
listaBotonesDibujo.forEach(boton => {
    boton.addEventListener("click", () => {
        listaBotonesDibujo.forEach(boton => {
            boton.classList.remove("BtnActive");
        })
        boton.classList.toggle("BtnActive");
    })
});



// funciones de los botones

btnCuadricula.addEventListener("click", () => {
    listaIconosCuadricula.forEach(icono => {
        icono.classList.toggle("u-displayNone");

    })
    board.classList.toggle("CuadriculaActiva");
})


btnBorrar.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
})





// CANVAS:

//Guardar el elemento y el contexto
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

function resizeCanvas() {
    canvas.width = canvas.clientWidth;  // Establece el ancho real
    canvas.height = canvas.clientHeight; // Establece la altura real
}

window.addEventListener('resize', resizeCanvas);


// cambio la variable color:


btnPurple.addEventListener("click", () => {
    color = "#874aaf";
})
btnYellow.addEventListener("click", () => {
    color = "#f0ff53";
})
btnBlue.addEventListener("click", () => {
    color = "#5b93bc";
})
btnGreen.addEventListener("click", () => {
    color = "#006d53";
})

// funcion de dibujar

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

const mouseMoving = (evt) => {
    evt.preventDefault();
    if (evt.changedTouches === undefined) {
        dibujar(evt.offsetX, evt.offsetY);
    } else {
        dibujar(evt.changedTouches[0].pageX - correccionX, evt.changedTouches[0].pageY - correccionY);
    }
};

const mouseUp = () => {
    canvas.removeEventListener("mousemove", mouseMoving);
    canvas.removeEventListener("touchmove", mouseMoving);
};

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);

//pantallas tactiles
canvas.addEventListener('touchstart', mouseDown);
canvas.addEventListener('touchend', mouseUp);




// ACORDEON en ABOUT
const listaItems = document.querySelectorAll('.About-item');
listaItems.forEach(item => {
    item.addEventListener("click", () => {
        listaItems.forEach(item => item.classList.remove("open"));
        item.classList.toggle("open");
    });

});


// GALERÍA


const scrollGaleria = document.querySelector("#Galeria-content");

scrollGaleria.addEventListener('wheel', (e) => {

    const posicionFinal = scrollGaleria.scrollLeft + scrollGaleria.clientWidth >= scrollGaleria.scrollWidth;
    const posicionInicio = scrollGaleria.scrollLeft === 0;


    // Si estamos en la posición final o de inicio del scroll de la galería, permitimos el scroll vertical,
    // y además estamos haciendo scroll arriba o abajo con el mouse cambiando el "e.deltaY" a mayor o menor de su valor inicial 0:
    if (posicionFinal && e.deltaY > 0 || posicionInicio && e.deltaY < 0) {
        // no afecta en nada
        return;

    } else {
        // Si no estamos al final ni al principio, seguimos con el scroll horizontal
        e.preventDefault();
        scrollGaleria.scrollLeft += e.deltaY;
    }

});


