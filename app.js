// Function to copy Discord ID
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

// =========================
// GLOBAL VISIT TRACKER (Firebase)
// =========================

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAaZKCzznNAGS2XYWJjd1yQVpGeMGmJ_bU",
    authDomain: "realttracker.firebaseapp.com",
    databaseURL: "https://realttracker-default-rtdb.firebaseio.com",
    projectId: "realttracker",
    storageBucket: "realttracker.firebasestorage.app",
    messagingSenderId: "672432400589",
    appId: "1:672432400589:web:46cc1fb12e189447796184",
    measurementId: "G-2WQLNSHV6F"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function trackGlobalVisits() {
    const visitRef = db.ref("visitCount");

    // Show zero immediately before Firebase updates
    document.getElementById("uniqueVisitCount").textContent = 0;

    // Increment the counter
    visitRef.transaction((count) => {
        return (count || 0) + 1;
    });

    // Display the count when Firebase updates
    visitRef.on("value", (snapshot) => {
        const countElement = document.getElementById("uniqueVisitCount");
        if (countElement) {
            countElement.textContent = snapshot.val() || 0;
        }
    });
}

// Run tracker when page loads
window.addEventListener("load", trackGlobalVisits);
