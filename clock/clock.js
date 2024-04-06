

setInterval(() => {
    const deg = 6;
    const hr = document.querySelector(".hr");
    const min = document.querySelector(".min");
    const sec = document.querySelector(".sec");

    let date = new Date();

    let hh = date.getHours() * 30;
    let minutes = date.getMinutes() * deg;
    let sc = date.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (minutes / 12)}deg)`;
    min.style.transform = `rotate(${minutes}deg)`;
    sec.style.transform = `rotate(${sc}deg)`;
})



