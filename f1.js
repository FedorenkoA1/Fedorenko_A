const fio = prompt("Введите ваше ФИО", "Иванов Иван Иванович");
const age = parseInt(prompt("Введите ваш возраст в годах", 20));
const age2 = age * 365;
const age3 = age + 5
let sex
if (confirm("Ваш пол мужской")) {
    sex = "мужской"
} else {
    sex = "женский"
}

let pension
if (age < 65) {
    pension = "нет"
} else {
    pension = "да"
}

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