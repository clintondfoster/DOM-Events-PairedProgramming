const inputBox = document.querySelector("input")
const button = document.querySelector("button")
const body = document.querySelector("body")



button.addEventListener("click", function(){
    const colors = ["blue", "green", "red", "pink", "purple", "magenta", "yellow"];
    let newColor = inputBox.value;
        if (colors.includes(newColor)) {
            body.style.backgroundColor = newColor;
        } else {
            alert ("I don't know that color :(")
        }
})