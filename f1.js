let fio;
do {
    fio = prompt("Введите ФИО")
} while (fio.length >= 30 || fio == "undefined" || fio.length < 1)

let age;
do {
    parseInt(age = prompt("Введите ваш возраст в годах"))
} while (isNaN(age))
const age2 = age * 365;
let age3 = parseInt(age) + 5
let sex
if (confirm("Ваш пол мужской")) {
    sex = "мужской"
} else {
    sex = "женский"
}

let pension
age < 65 ?
    pension = "нет"
    :
    pension = "да"


const ljf = alert(
    `
ваше ФИО : ${fio} 
ваш возраст в годах: ${age} 
ваш возраст в днях: ${age2}
через 5 лет вам будет: ${age3} 
ваш пол: ${sex}
вы на пенсии: ${pension}

    `
)   