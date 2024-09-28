/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    if (isNaN(String(str) / 2) || "" === str.trim()) {
        return false;
    }
    return true;
    // if (str.trim() === "") return false;
    // return Number(str) == str;
}
// console.log(isNumeric("123"));
// console.log(isNumeric("12.3"));
// console.log(isNumeric("123abc"));
// console.log(isNumeric("abc"));
// console.log(isNumeric(" "));

// console.log("123" / 2);

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
