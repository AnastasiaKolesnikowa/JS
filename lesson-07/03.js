/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

// function truncate(str, maxLength) {
//     if (str.length <= maxLength) {
//         return str;
//     }
//     return str.slice(0, maxLength) + "...";
// }

// console.log(truncate("Вот, что мне действительно нравится в этом", 20));
// console.log(truncate("Короткая строка", 20));

// str = "Короткая строка"
// str.lenght = 15
// maxLength = 10

function truncate(str, maxLength) {
    return str.length <= maxLength ? str : str.slice(0, maxLength) + "...";

    // return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

// console.log(truncate("Вот, что мне действительно нравится в этом", 20));
// console.log(truncate("Короткая строка", 20));
// console.log(truncate("", 20));
// console.log(truncate("", 20));
