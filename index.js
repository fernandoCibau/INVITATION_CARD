
// --------------------------------------------------------------------------
//                          FUNCIONES
//--------------------------------------------------------------------------
//----- AUDIO 
function audioPlay(){
    if( audio.classList.contains("play") ){
        audio.classList.remove("play");
        audio.src = " ";
    }else{
        audio.classList.add("play");
        audio.src = "./audio/Hannah Montana The Movie  The Climb scena dal film.mp3";
    }

    audio.play();
}

//---------------------------------------------------------------------------
//                           INICIO HTML
//---------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    audioPlay();
});

//-----------------------------------------------------------------------------
//                      BOTONES
// ----------------------------------------------------------------------------
//----- AUDIO 
let miBoton = document.getElementById("play-pause-music");
let audio = document.getElementById("audio");

miBoton.addEventListener("click", ()=> {
        audioPlay();

})


//------------------------------------------------------------------------