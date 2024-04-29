

// --------------------------------------------------------------------------
//                          FUNCIONES
//--------------------------------------------------------------------------
//----- AUDIO 
function audioPlay() {
    if (audio.classList.contains("play")) {
        audio.classList.remove("play");
        audio.src = " ";


        // style.backgroundColor = "green";
    } 
    else {
        audio.classList.add("play");
        audio.src = "./audio/RETRO DANCE 80 Y 90 S  DJ MATIAS TREJO.mp3";
    }

    audio.play();
}

function botonColor(){
    const boton = document.getElementById("play-pause-music");
    boton.addEventListener("click", () => {

    if( boton.style.backgroundColor == "green"){
        boton.style.backgroundColor = "red" 

    }else{
        boton.style.backgroundColor = "green" 
    }
    // Genera colores aleatorios (puedes personalizar esto)
    // const aleatorio1 = Math.floor(Math.random() * 256);
    // const aleatorio2 = Math.floor(Math.random() * 256);
    // const aleatorio3 = Math.floor(Math.random() * 256);

    // Cambia el color de fondo del botón
    // boton.style.backgroundColor = `rgb(${aleatorio1}, ${aleatorio2}, ${aleatorio3})`;
    });
}
botonColor();
//---------------------------------------------------------------------------
//                           INICIO HTML
//---------------------------------------------------------------------------
window.onload("load", () => {

    audioPlay();
    audio.classList.add("play");
    audio.src = "./audio/RETRO DANCE 80 Y 90 S  DJ MATIAS TREJO.mp3";
});

//-----------------------------------------------------------------------------
//                      BOTONES AUDIO
// ----------------------------------------------------------------------------
let miBoton = document.getElementById("play-pause-music");
let audio = document.getElementById("audio");

miBoton.addEventListener("click", () => {
    audioPlay();
    

})
//-----------------------------------------------------------------------------
//                      CARROUSEL
// ----------------------------------------------------------------------------

// const segundosElement = 10;
// let segundosRestantes = 10;

// let intervalo =10;
// function actualizarContador( intervalo) {
//     intervalo--;

//     if ( intervalo === 0) { return; }
//     actualizarContador(intervalo);
// }
// actualizarContador(intervalo);


window.addEventListener("load", () => {
    const glider = new Glider(document.querySelector('.list_carrousel'), {
        slidesToScroll: 1,
        slidesToShow: 2,
        draggable: true,
        dots: '.indice_carrousel',
        arrows: {
            prev: '.prev',
            next: '.next'
        },
        responsive: [
            {
                // Pantallas mayores o iguales a 775px
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                }
            }, {
                // Pantallas mayores o iguales a 1024px
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    draggable: true,
                }
            }
        ]
    });

});


// <a href="https://www.fixdate.io/modelo-invitacion/36/img/galeria/1.jpg"
// data-fancybox="galeria" tabindex="-1">
// <img src="https://www.fixdate.io/modelo-invitacion/36/img/galeria/1.jpg" alt="">
// </a>

//---------------------------------------------------------------------------