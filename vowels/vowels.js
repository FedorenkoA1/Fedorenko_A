//Написать «чистую» функцию для эффективного подсчёта количества русских гласных букв в строке.
//Регулярные выражения (кто умеет) не использовать.
//Спросить у пользователя строку. Вывести в консоль количество русских гласных букв в ней.

let str = prompt("Введите строку");
const vow = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"]
function vowels(str) {
    let sum = null;
    for (let letter of str) {
        if (vow.includes(letter) == true) {
            sum++
        }
    }
    return console.log(`Количество гласных в вашей строке равно ${sum}`);
}
vowels(str);