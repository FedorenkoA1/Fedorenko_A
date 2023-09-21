// N.17 Домашнее задание VOWELS_ARR
// Переписать ДЗ VOWELS (подсчёт гласных букв в строке) без использования циклов, тремя способами:
// с использованием метода массива forEach,
// с использованием метода массива filter,
// с использованием метода массива reduce.
// Подсчёт каждым способом должен быть оформлен в виде чистой функции, 
//получающей строку и возвращающей количество гласных букв в ней.

// Спросить у пользователя строку. Вызвать с этой строкой все три функции. Отобразить три результата,
// которые они вернули.
const str = prompt("Введите строку")
function forEachVowels(str) {
    const vowels = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
    let countVowels = 0;
    const splited = str.split("");
    splited.forEach(item => {
        if (vowels.includes(item)) {
            countVowels++
        }
    });
    console.log(`Количество глассных букв метода forEach равно: ${countVowels}`);
};
forEachVowels(str);


function filterVowels(str) {
    const vowels = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
    const splited = str.split("");
    const vowelsFiltered = splited.filter(item => {
        if (vowels.includes(item)) {
            return true;
        }
    });
    console.log(`Количество глассных букв метода filter равно: ${vowelsFiltered.length}`);
};
filterVowels(str);


function reduceVowels(str) {
    const vowels = ["а", "и", "е", "ё", "о", "у", "ы", "э", "ю", "я"];
    const splited = str.split("");
    console.log("Количество гласных букв метода reduce равно: " + splited.reduce((acc, item) => {
        if (vowels.includes(item)) {
            acc++;
        }
        return acc;
    }, 0));

};
reduceVowels(str);