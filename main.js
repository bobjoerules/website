const parallax = document.getElementById("parallax");
const lols = document.getElementById("lols");
var video = document.getElementById("myVideo");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    lols.style.backgroundPositionY = offset * 2 + 'px';
})
