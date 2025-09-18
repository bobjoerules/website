const nameItem = document.getElementById('name')
let intervalId;
let originalText = nameItem.innerText

function scrambleText() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let scrambledText = '';
    for (let i = 0; i < originalText.length; i++) {
        scrambledText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    nameItem.textContent = scrambledText;
}

function unscrambleText() {
nameItem.textContent = originalText
}
document.addEventListener("DOMContentLoaded", function() {
    const nameItem = document.getElementById("name");
    originalText = nameItem.innerText
    intervalId = setInterval(() => scrambleText(), 50);
    setTimeout(() => {
        clearInterval(intervalId);
        unscrambleText();
    }, 200);
});