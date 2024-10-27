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

// Function to track unique visits for this user
        function trackUniqueVisit() {
            // Retrieve current unique visit count from localStorage or set to 0
            let uniqueVisitCount = localStorage.getItem('uniqueVisitCount') || 0;

            // Check if the user has visited before
            const hasVisited = localStorage.getItem('hasVisited');

            // If "hasVisited" is not set, it's the user's first visit for the count increment
            if (!hasVisited) {
                // Increment the unique visit count
                uniqueVisitCount++;

                // Update unique visit count in localStorage
                localStorage.setItem('uniqueVisitCount', uniqueVisitCount);

                // Set "hasVisited" flag to true in localStorage
                localStorage.setItem('hasVisited', 'true');
            }

            // Display the unique visit count
            document.getElementById('uniqueVisitCount').textContent = uniqueVisitCount;
        }

        // Run the function on page load
        trackUniqueVisit();