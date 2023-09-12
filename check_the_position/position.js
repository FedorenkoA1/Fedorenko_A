const area = document.querySelector(".area");
const square = document.querySelector(".square");
const width = area.offsetWidth;
const height = area.offsetHeight;
const widthSquare = square.offsetWidth;
const heightSquare = square.offsetHeight;
let x = 0;
let y = 0;
window.addEventListener("keydown", (e) => {
    console.log(e)
    switch (e.keyCode) {
        case 37:
            if (x >= 10) {
                square.style.left = (x -= 10) + "px";
            }
            console.log("location Left  - " + x)
            break;
        case 38:
            if (y > 0) {
                square.style.top = (y -= 10) + "px"
                console.log("locationy Top - " + y)
            }
            break;
        case 39: if (x < (width - widthSquare)) {
            console.log("location Right - " + x)
            square.style.left = (x += 10) + "px"
        };
            break;
        case 40:
            console.log("location Bottom - " + y)
            if (y < (height - heightSquare)) {
                square.style.top = (y += 10) + "px";
            }
            break;

    }
})

