
// --------------------------------------------------------------------------
//                          FUNCIONES
//--------------------------------------------------------------------------
//----- AUDIO 
// function audioPlay() {
    // if (audio.classList.contains("play")) {
        // audio.classList.remove("play");
        // audio.src = " ";
    //     audio.classList.add("play");
    //     audio.src = "./audio/RETRO DANCE 80 Y 90 S  DJ MATIAS TREJO.mp3";
    // // } 
    // else {
    //     audio.classList.add("play");
    //     audio.src = "./audio/RETRO DANCE 80 Y 90 S  DJ MATIAS TREJO.mp3";
    // }

    // audio.play();
// }


//---------------------------------------------------------------------------
//                           INICIO HTML
//---------------------------------------------------------------------------
window.addEventListener("load", () => {
    // audioPlay();
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
window.addEventListener("load", () => {
    new Glider(document.querySelector('.list_carrousel'), {
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
                // screens greater than >= 775px
                breakpoint: 300,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    // arrows: {
                    //     prev: '.prev',
                    //     next: '.next'
                    // },
                    // itemWidth: 150,
                    // duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    draggable: true,
                    // arrows: {
                    //     prev: '.prev',
                    //     next: '.next'
                    // },
                    // // itemWidth: 150,
                    // duration: 0.25
                }
            }
        ]
        ////-----------------------------

    });
})



// <a href="https://www.fixdate.io/modelo-invitacion/36/img/galeria/1.jpg"
// data-fancybox="galeria" tabindex="-1">
// <img src="https://www.fixdate.io/modelo-invitacion/36/img/galeria/1.jpg" alt="">
// </a>

//---------------------------------------------------------------------------