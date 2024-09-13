//your JS code here. If required.
let currentSound = null;

function playSound(soundName) {
    if (currentSound) {
        currentSound.pause(); // Pause any currently playing sound
        currentSound.currentTime = 0; // Reset sound
    }

    currentSound = new Audio(`./sounds/${soundName}.mp3`); // Load new sound from the sounds folder
    currentSound.play(); // Play the new sound
}

function stopSound() {
    if (currentSound) {
        currentSound.pause(); // Stop the sound
        currentSound.currentTime = 0; // Reset the audio track to the beginning
        currentSound = null; // Clear the current sound
    }
}
