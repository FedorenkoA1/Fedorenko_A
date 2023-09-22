const area = document.querySelector(".area");
const square = document.querySelector(".square");
const width = area.offsetWidth;
const height = area.offsetHeight;
const widthSquare = square.offsetWidth;
const heightSquare = square.offsetHeight;
let x = 0;
let y = 0;
let timer;
window.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 37:
            clearInterval(timer);
            timer = setInterval((() => {
                if (x >= 5) {
                    square.style.left = (x -= 5) + "px";
                } else {
                    clearInterval(timer)
                }
            }), 10);
            break;
        case 38:
            clearInterval(timer);
            timer = setInterval(() => {
                if (y > 0) {
                    square.style.top = (y -= 5) + "px"
                } else {
                    clearInterval(timer);
                }
            }, 10)
            break;
        case 39:
            clearInterval(timer);
            timer = setInterval(() => {
                if (x < (width - widthSquare)) {
                    square.style.left = (x += 5) + "px"
                } else {
                    clearInterval(timer);
                }
            }, 10)
            break;
        case 40:
            clearInterval(timer)
            timer = setInterval(() => {
                if (y < (height - heightSquare)) {
                    square.style.top = (y += 5) + "px";
                } else {
                    clearInterval(timer);
                }
            }, 10)
            break;
        case 32: clearInterval(timer);
    }
})

