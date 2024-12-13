document.getElementById("bankrupt-album").addEventListener("mouseover", (e) => {
    audioControl.pause();
    getAlbumSrc("bankrupt-album");
    playAudio();
    

});

document.getElementById("alphabetical-album").addEventListener("mouseover", (e) => {
    audioControl.pause();
    getAlbumSrc("alphabetical-album");
    playAudio();

});

document.getElementById("ti-amo-album").addEventListener("mouseover", (e) => {
    audioControl.pause();
    getAlbumSrc("ti-amo-album");
    playAudio();

});

document.getElementById("its-never-been-like-that-album").addEventListener("mouseover", (e) => {
    audioControl.pause();
    getAlbumSrc("its-never-been-like-that-album");
    playAudio();

});

document.getElementById("alpha-zulu-album").addEventListener("mouseover", (e) => {
    audioControl.pause();
    getAlbumSrc("alpha-zulu-album");
    playAudio();

});

document.getElementById("wolfgang-amadeus-remix-album").addEventListener("mouseover", (e) => {
    audioControl.pause();
    getAlbumSrc("wolfgang-amadeus-remix-album");
    playAudio();

});

document.getElementById("wolfgang-amadeus-album").addEventListener("mouseover", (e) => {
    audioControl.pause();
    getAlbumSrc("wolfgang-amadeus-album");
    playAudio();

});

document.getElementById("united-album").addEventListener("mouseover", (e) => {
    audioControl.pause();
    getAlbumSrc("united-album");
    playAudio();

});

function getAlbumSrc(key) {
    audioSource.src = albumSrc[key]
    currentlyPlaying.src = imgAlbumSrc[key]
    console.log(audioSource)
}

function playAudio() {
    audioControl.load()
    audioControl.play()
    console.log(audioControl)
}

const albumSrc = {
    "bankrupt-album" : "musiques/entertainement.wav",
    "alphabetical-album": "musiques/everything.wav",
    "ti-amo-album": "musiques/j-boy.wav",
    "its-never-been-like-that-album": "musiques/long-distance-call.wav",
    "alpha-zulu-album":"musiques/after-midnight.wav",
    "wolfgang-amadeus-remix-album":"musiques/lisztomania-remix.wav",
    "wolfgang-amadeus-album":"musiques/1901.wav",
    "united-album":"musiques/if-i-ever-feel-better.wav"
}

const imgAlbumSrc = {
    "bankrupt-album" : "assets/bankrupt.jpg",
    "alphabetical-album": "assets/Alphabetical.jpg",
    "ti-amo-album": "assets/ti_amo.jpeg",
    "its-never-been-like-that-album": "assets/its_never_been_like_that.jpg",
    "alpha-zulu-album":"assets/alpha_zulu.jpeg",
    "wolfgang-amadeus-remix-album":"assets/wolfgang-amadeus-remix.jpeg",
    "wolfgang-amadeus-album":"assets/wolfgang-amadeus.jpg",
    "united-album":"assets/united.jpg"
}

const audioControl = document.getElementById("audio-controls")
const audioSource = document.getElementById("audio-source")
const currentlyPlaying = document.getElementById("currently-playing-img")
const audioSlider = document.getElementById("audio-slider");

for (element in albumSrc) {
    audioSource.src = albumSrc[element]
    audioControl.load()
}

audioSlider.addEventListener("input", (e) => {
    const volume = e.target.value / 100; // Convertir en nombre entre 0 et 1
    audioControl.volume = volume;
    console.log(`Volume set to: ${volume}`);
});

console.log("fin du chargement")