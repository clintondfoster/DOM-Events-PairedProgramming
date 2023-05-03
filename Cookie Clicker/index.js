let cookie = document.querySelector(".cookie")
let counter = document.querySelector(".counter")


cookie.addEventListener("click", cookieClick)

function cookieClick() {
let counterNum = parseInt(counter.innerText);
counterNum += 1;
counter.innerText = counterNum;
}

