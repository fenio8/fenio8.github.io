document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const body = document.getElementById('body');


    audio.volume = 0.2;


    function updateBackground() {
        if (audio.paused) {
            body.classList.remove('playing');
            body.classList.add('paused');
        } else {
            body.classList.remove('paused');
            body.classList.add('playing');
        }
    }


    audio.addEventListener('play', updateBackground);
    audio.addEventListener('pause', updateBackground);


    updateBackground();
});
