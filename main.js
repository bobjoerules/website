function enlargeImage(img) {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");
    overlayImg.src = img.src;
    overlay.style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function fadeIn(img) {
    img.style.opacity = '1';
}