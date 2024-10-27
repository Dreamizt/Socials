function copyText() {
    const discordID = "dreamists"; // Replace with your actual Discord ID

    navigator.clipboard.writeText(discordID).then(() => {
        alert("Why Copy it bruhh");
    }).catch((err) => {
        console.error("Could not copy text: ", err);
    });
}

// Get references to the video element and buttons
const video = document.getElementById("bgVideo");
const muteButton = document.getElementById("muteButton");
const playButton = document.getElementById("playButton");

// Mute/unmute functionality
muteButton.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
});

// Play/pause functionality
playButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playButton.textContent = "Pause";
    } else {
        video.pause();
        playButton.textContent = "Play";
    }
});

window.addEventListener("load", () => {
    video.play().catch(error => {
        console.error("Autoplay blocked:", error);
    });
});
