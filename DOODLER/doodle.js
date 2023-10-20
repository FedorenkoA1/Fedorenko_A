const vw = window.innerWidth / 100;
const vh = window.innerHeight / 100;
console.log(window.innerWidth)
console.log(window.innerHeight)


// global variables for canvas
let canvas;
const canvasWidth = 30.879 * vw;
const canvasHeight = 100 * vh;
let ctx;

//doodler in details 
const doodlerWidth = 4 * vw;
const doodlerHeight = 9 * vh;
let doodlerXPositionInCanvas = canvasWidth / (0.130 * vw) - doodlerWidth / (0.130 * vh);
let doodlerYPositionInCanvas = canvasHeight * 6 / 8 - doodlerHeight / 2;
let doodlerImageLeft;
let doodlerImageRight;

let doodlerObject = {
    x: doodlerXPositionInCanvas,
    y: doodlerYPositionInCanvas,
    width: doodlerWidth,
    height: doodlerHeight,
    img: null
}

//image of platform
let platformImage;
let platformWidth = 4.849 * vw;
let platformHeight = 2.894 * vh;

//doodler's physics
let directionX = 0.262 * vw; // doodler's x axis speed
let directionY = 0; // doodler's y axis speed
let initialDirectionY = -(1.302 * vh); // doodler's direction
let gravity = 0.4; // so that imitate real jump

let arrOfPlatforms = []; // here we will storecoordinatea and images of our platforms

//using "window onload" we check if all styles, pictures and files were downloaded
window.onload = () => {
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    doodlerImageLeft = new Image();
    doodlerImageLeft.src = "./doodler-left.png"
    doodlerObject.img = doodlerImageLeft;
    //we check if the image was downloaded completely
    doodlerImageLeft.onload = () => {
        ctx.drawImage(doodlerObject.img, doodlerObject.x, doodlerObject.y, doodlerWidth, doodlerHeight);
    }
    doodlerImageRight = new Image();
    //we check if the image of doodler was downloaded completely
    doodlerImageRight.onload = () => {
        ctx.drawImage(doodlerObject.img, doodlerObject.x, doodlerObject.y, doodlerWidth, doodlerHeight);
    }
    doodlerImageRight.src = "./doodler-right.png";
    platformImage = new Image();
    platformImage.src = "./platform (1).png";
    createPlatforms();
    directionY = initialDirectionY;
}

window.requestAnimationFrame(render);
//we add the listeners to track keyboard pressings
let pressed = {};
document.addEventListener("keydown", (e) => {
    pressed[e.code] = true;
});
document.addEventListener("keyup", (e) => {
    pressed[e.code] = false;
});

//rendeer function using which we will animate the doodler
function render() {
    window.requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight); //every iteration we will clear the canvas
    if (pressed["ArrowLeft"] || pressed["KeyA"]) {
        doodlerObject.x -= directionX;
        doodlerObject.img = doodlerImageLeft;
    }
    if (pressed["ArrowRight"] || pressed["KeyD"]) {
        doodlerObject.x += directionX;
        doodlerObject.img = doodlerImageLeft;
        doodlerObject.img = doodlerImageRight;
    }

    directionY += gravity;
    doodlerObject.y += directionY;

    if (doodlerObject.x > canvas.width) {
        doodlerObject.x = 0;
    } else if (doodlerObject.x + doodlerWidth < 0) {
        doodlerObject.x = canvas.width;
    }

    ctx.drawImage(doodlerObject.img, doodlerObject.x, doodlerObject.y, doodlerWidth, doodlerHeight);

    //function which will check the collision between doodler and platform
    function checkTheCollision(a, b) {
        return a.x + a.width > b.x &&
            b.x + b.width > a.x &&
            a.y + a.height > b.y &&
            b.y + b.heigth > a.y

    }


    for (let platformItem of arrOfPlatforms) {
        if (directionY < 0 && doodlerObject.y < canvasHeight * 3 / 4) {
            platformItem.y -= initialDirectionY + 0.724 * vh; //in every iteration down platform's "y" axe coordinate to slide it
        }
        if (checkTheCollision(doodlerObject, platformItem) && directionY > 0) {
            directionY = initialDirectionY;
        }
        ctx.drawImage(platformImage, platformItem.x, platformItem.y, platformItem.width, platformItem.height);
    }

    while (arrOfPlatforms.length > 0 && arrOfPlatforms[0].y >= canvasHeight) {
        arrOfPlatforms.shift();
        platformUpdate();
    }
}

//create platform
function createPlatforms() {
    let platform = {
        img: platformImage,
        x: canvas.width / 2,
        y: canvas.height - (6 * vh),
        width: platformWidth,
        height: platformHeight
    }
    arrOfPlatforms.push(platform);


    // create 7 random platforms
    for (let i = 0; i < 7; i++) {
        let randomX = Math.floor(Math.random() * (canvas.width - 5 * vw));

        let platform = {
            img: platformImage,
            x: randomX,
            y: canvas.height - (14 * vh * i) - (26 * vh),  // 72*i to remain space berween each of platform
            width: platformWidth,
            height: platformHeight
        }
        arrOfPlatforms.push(platform)

    }


}
function platformUpdate() {
    let randomX = Math.floor(Math.random() * canvas.width * 3 / 4);
    let platform = {
        img: platformImage,
        x: randomX,
        y: -platformHeight,
        width: platformWidth,
        height: platformHeight
    }
    arrOfPlatforms.push(platform)

}


