const parallax = document.getElementById("parallax");
const lols = document.getElementById("lols");
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    lols.style.backgroundPositionY = offset * 2 + 'px';
})
