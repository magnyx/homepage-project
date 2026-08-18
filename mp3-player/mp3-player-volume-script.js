const volumeAudio = document.getElementById('audio-track');
const volumeSlider = document.querySelector('.volume-slider');
const volumeIcon = document.querySelector('.volume-icon')

volumeAudio.volume = volumeSlider.value / 100;

volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    volumeAudio.volume = value / 100;

    if (value == 0) {
        volumeIcon.textContent = '🔈';
    }
    else if (value < 50) {
        volumeIcon.textContent = '🔉';        
    } 
    else {
        volumeIcon.textContent = '🔊';
    } 
});