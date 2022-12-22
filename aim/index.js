const counterDisplay = document.querySelector("h3");
let counter = 0;

newImgPath = "ketchupNew.png";
 
const imgMouvement = () => {
let img = document.createElement("img");
img.src = "./asset/moustiqueNew.png";
img.classList.add("image");
document.body.appendChild(img);

const size = Math.random() * 40 + 100 + "px";
img.style.height = size;
img.style.width = size;

img.style.top = Math.random() * 100 + 100 + "%";
img.style.left = Math.random() * 100 + "%";

const plusMinus = Math.random() > 0.5 ? 1 : -1;
img.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");


img.addEventListener("click", () =>{
    counter++;
    counterDisplay.textContent = counter;
    
    /* img.src = newImgPath;
    img.classList.remove("animated");
    img.classList.remove("image");
    setTimeout(() => {
        img.remove();
    }, 1000); */
    img.remove();
});



setTimeout(() => {
    img.remove();
}, 8000);
};

setInterval(imgMouvement, 900); 




let temps = 45;
const timerElement = document.getElementById("timer");
timerElement.innerText = "00:45";
function lowTime () {

    let minute = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);

    minute = minute < 10 ? "0" + minute : minute;
    secondes = secondes < 10 ? "0" + secondes : secondes;
    
    timerElement.innerText = `${minute}:${secondes}`
    temps = temps <= 0 ? 0 : temps - 1
};
setInterval(lowTime, 1000);

function resultFunction () {
const result = window.alert("Tu as écrasé " +(counter) + " mouches! Tu peux mieux faire!")};
setTimeout(resultFunction, 47000);

const player = document.querySelector('#audioPlayer');
player.play();
player.pause();
player.currentTime = 0;

$('#music-button').toggle(
    function () {
    document.getElementById('playMusic').play();
    },
    function () {
    document.getElementById('playMusic').pause();
    }
    );