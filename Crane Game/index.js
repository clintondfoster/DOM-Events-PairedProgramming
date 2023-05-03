const lbutton = document.querySelector("#left");
const ubutton = document.querySelector("#up");
const dbutton = document.querySelector("#down");
const rbutton = document.querySelector("#right");

// Get size of containing viewport.
const width = window.innerWidth;
const height = window.innerHeight;

// Size of the image we'll be moving.
const imgWidth = 294;
const imgHeight = 240;

let boatLeft = Math.floor(width / 2) - Math.floor(imgWidth / 2);
let boatTop = Math.floor(height / 2) - Math.floor(imgHeight / 2);

const craneBoat = document.querySelector("img");

function setBoatPos() {
    craneBoat.style.left = boatLeft + "px";
    craneBoat.style.top = boatTop + "px";
}

setBoatPos();

function updateBoatPos(direction) {
    if (direction === "left") {
        boatLeft -= 5;
    } else if (direction === "up") {
        boatTop -= 5;
    } else if (direction === "down") {
        boatTop += 5;
    } else {
        boatLeft += 5;
    }
    setBoatPos();
}

lbutton.addEventListener("click", function() {
    updateBoatPos("left");
});
ubutton.addEventListener("click", function() {
    updateBoatPos("up");
});
dbutton.addEventListener("click", function() {
    updateBoatPos("down");
});
rbutton.addEventListener("click", function() {
    updateBoatPos("right");
});