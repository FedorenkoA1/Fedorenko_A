let fio;
do {
    fio = prompt("Введите ФИО");
} while (fio.length >= 30 || fio == "undefined" || fio.length < 1)

let age;

do {
    parseInt(age = prompt("Введите ваш возраст в годах"))
} while (isNaN(age))

const age2 = age * 365;

let age3 = parseInt(age) + 5;

let sex = confirm("Ваш пол мужской?");

if (sex == true) {
    if (age < 63) {
        sex = "мужской";
        pension = "нет";
    } else {
        sex = "мужской";
        pension = "да";
    }
} else {
    if (age < 57) {
        sex = "женский";
        pension = "нет";
    } else {
        sex = "женский";
        pension = "да";

    }
}

alert(
    `
ваше ФИО : ${fio} 
ваш возраст в годах: ${age} 
ваш возраст в днях: ${age2}
через 5 лет вам будет: ${age3} 
ваш пол: ${sex}
вы на пенсии: ${pension}

    `
)   