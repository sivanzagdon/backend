// Script.js

var modelVideo = document.getElementById("modelVideo");
var playPauseButton = document.getElementById("playPauseButton");
var galleryImage = document.getElementById("galleryImage");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"]; // רשימת התמונות
var currentImageIndex = 0; // אינדקס התמונה הנוכחית

function playPause() {
    if (modelVideo.paused) {
        modelVideo.play();
        playPauseButton.innerHTML = "<i class='fas fa-pause'></i>";
    } else {
        modelVideo.pause();
        playPauseButton.innerHTML = "<i class='fas fa-play'></i>";
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        // אם זו התמונה הראשונה, תעשה משהו כמו לחזור לתמונה האחרונה ברשימה
        currentImageIndex = images.length - 1;
    }
    galleryImage.src = images[currentImageIndex];
}

function nextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
    } else {
        // אם זו התמונה האחרונה, תעשה משהו כמו לחזור לתמונה הראשונה ברשימה
        currentImageIndex = 0;
    }
    galleryImage.src = images[currentImageIndex];
}
