const progressAudio = document.getElementById('audio-track')
const progressBar = document.querySelector('.progress-bar')

progressAudio.addEventListener('timeupdate', () => {
    if (progressAudio.duration) {
        const percentage =  (progressAudio.currentTime / progressAudio.duration) * 100;
        progressBar.value = percentage;
    }
});

progressBar.addEventListener('input', (e) => {
    if (progressAudio.duration) {
        const newTime = (e.target.value / 100) * progressAudio.duration; progressAudio.currentTime = newTime;
    }
});