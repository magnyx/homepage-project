const playAudio = document.getElementById('audio-track')
const playBtn = document.getElementById('play-btn')

playBtn.addEventListener('click', () => {
    if (playAudio.paused) {
        playAudio.play();
        playBtn.textContent = '⏸';
    }
    else {
        playAudio.pause();
        playBtn.textContent = '▶';
    }
});