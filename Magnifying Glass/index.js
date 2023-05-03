const biggerButton = document.querySelector("#bigger");
const smallerButton = document.querySelector("#smaller");
const text = document.querySelector("#text");

let fontSize = 24;

biggerButton.addEventListener("click", function() {
    if (fontSize >= 100) {
        alert("That's big enough");
    } else {
        fontSize += 1;
        text.style.fontSize = fontSize + "px";
    }
});

smallerButton.addEventListener("click", function() {
    if (fontSize <= 1) {
        alert("That's big enough");
    } else {
        fontSize -= 1;
        text.style.fontSize = fontSize + "px";
    }
});