 const galleryImages = Array.from(document.querySelectorAll(".images .low-res"));
let currentImageIndex = -1;

function showImageAtIndex(index) {
    if (index < 0 || index >= galleryImages.length) return;

    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlayImg");
    const filename = galleryImages[index].src.split('/').pop();

    currentImageIndex = index;
    overlayImg.src = `/photo-portfolio/images/${filename}`;
    overlay.style.display = "flex";
    document.body.classList.add("no-scroll");
}

function showAdjacentImage(direction) {
    if (currentImageIndex === -1 || galleryImages.length === 0) return;
    const nextIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
    showImageAtIndex(nextIndex);
}

function enlargeImage(img) {
    const clickedIndex = galleryImages.indexOf(img);
    if (clickedIndex === -1) return;
    showImageAtIndex(clickedIndex);
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    currentImageIndex = -1;
}

document.addEventListener("keydown", function (event) {
    const overlay = document.getElementById("overlay");
    if (overlay.style.display !== "flex") return;

    if (event.key === "ArrowRight") {
    event.preventDefault();
    showAdjacentImage(1);
    } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    showAdjacentImage(-1);
    } else if (event.key === "Escape") {
    event.preventDefault();
    closeOverlay();
    }
});

function fadeIn(img) {
    img.style.opacity = '1';
}