// global variables for canvas
let canvas
let ctx
setUpCanvas();

window.addEventListener("resize", setUpCanvas)

console.log(canvas)
//doodler in details 
const doodlerWidth = canvas.width / 12;
const doodlerHeight = canvas.height / 8;


let doodlerXPositionInCanvas = canvas.width / 2 - doodlerWidth / 2;
let doodlerYPositionInCanvas = canvas.height * 6 / 8 - doodlerHeight / 2;

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
let platformWidth = canvas.width / 9;
let platformHeight = canvas.height / 22;

//doodler's physics
let directionX = canvas.width / 179.17; // doodler's x axis speed
let directionY = 0; // doodler's y axis speed
let initialDirectionY = -12; // doodler's direction
let gravity = 0.4; // so that imitate real jump

let arrOfPlatforms = []; // here we will storecoordinatea and images of our platforms

let score = 0; // here we will stock the ultimate score 
let maxScore = 0; // here we will stock the temporary score


//let soundBool = false;

//using "window onload" we check if all styles, pictures and files were downloaded
window.onload = () => {
    doodlerImageLeft = new Image();
    doodlerImageLeft.src = "./images/doodler-left.png"
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
    doodlerImageRight.src = "./images/doodler-right.png";
    platformImage = new Image();
    platformImage.src = "./images/platform (1).png";
    createPlatforms();
    directionY = initialDirectionY;
    window.requestAnimationFrame(render);
}


console.log(canvas)
//we add the listeners to track keyboard pressings
let pressed = {};
document.addEventListener("keydown", (e) => {
    pressed[e.code] = true;
});
document.addEventListener("keyup", (e) => {
    pressed[e.code] = false;
});

//set the audio if (doodlerObject.y + doodlerHeight <= canvasHeight)



//rendeer function using which we will animate the doodler
function render() {
    window.addEventListener("click", soundPlay)
    window.requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height); //every iteration we will clear the canvas
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
            b.y + b.height > a.y

    }


    for (let platformItem of arrOfPlatforms) {
        if (directionY < 0 && doodlerObject.y < canvas.height - 320) {
            platformItem.y -= initialDirectionY + 5; //in every iteration down platform's "y" axe coordinate to slide it
        }
        if (checkTheCollision(doodlerObject, platformItem) && directionY > 0) {
            directionY = initialDirectionY;
        }
        ctx.drawImage(platformImage, platformItem.x, platformItem.y, platformItem.width, platformItem.height);
    }

    while (arrOfPlatforms.length > 0 && arrOfPlatforms[0].y >= canvas.height) {
        arrOfPlatforms.shift();
        platformUpdate();
    }
    // we create the score
    scoreUpdate();
    ctx.fillStyle = "white";
    ctx.font = "40px sans-serif";
    ctx.fillText(score, 9, 60);
}

//create platform
function createPlatforms() {
    let platform = {
        img: platformImage,
        x: canvas.width / 2,
        y: canvas.height - 40,
        width: platformWidth,
        height: platformHeight
    }
    arrOfPlatforms.push(platform);


    // create 7 random platforms
    for (let i = 0; i < 7; i++) {
        let randomX = Math.floor(Math.random() * (canvas.width - 90));
        console.log(randomX)
        let platform = {
            img: platformImage,
            x: randomX,
            y: canvas.height - 100 * i - 130,  // 72*i to remain space berween each of platform
            width: platformWidth,
            height: platformHeight
        }
        arrOfPlatforms.push(platform)

    }


}

function setUpCanvas() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
    // Set display size (vw/vh).
    let sizeWidth = 70 * window.innerWidth / 100,
        sizeHeight = 100 * window.innerHeight / 100;
    console.log(sizeWidth)
    console.log(sizeHeight)

    //Setting the canvas site and width to be responsive 
    canvas.width = sizeWidth;
    canvas.height = sizeHeight;
    canvas.style.width = sizeWidth;
    canvas.style.height = sizeHeight;
}
function platformUpdate() {
    let randomX = Math.floor(Math.random() * (canvas.width - 90));
    let platform = {
        img: platformImage,
        x: randomX,
        y: -(platformHeight - 10),
        width: platformWidth,
        height: platformHeight
    }
    arrOfPlatforms.push(platform)

}

function scoreUpdate() {
    let points = Math.floor(Math.random() * 50);
    if (directionY < 0) {
        maxScore += points;
        if (score < maxScore) {
            score = maxScore;
        }
    } else if (directionY >= 0) {
        maxScore -= points;
    }
}


function soundPlay() {
    const audio = new Audio('./audio/I Show The Meat.mp3');
    audio.play();
    audio.loop = true;
}
function soundPause() {
    const audio = new Audio('./audio/i-show-the-meat-made-with-Voicemod-technology.mp3');
    audio.pause();
}
