const parallax = document.getElementById("parallax");
const lols = document.getElementById("lols");
const game = document.getElementById("game");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    lols.style.backgroundPositionY = offset * 2 + 'px';
    game.style.backgroundPositionY = offset * 0.5 -40 + 'px';
})
const allElements = document.querySelectorAll('*');
allElements.forEach(element => {
    element.draggable = false;
});