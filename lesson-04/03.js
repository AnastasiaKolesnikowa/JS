/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const arr1 = ["apple", "orange"];
const arr2 = ["banana", "apple"];

function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

function findCommonElements(array1, array2) {
    const newArr = [];
    for (let i = 0; i < array1.length; i++) {
        if (includesElement(array2, array1[i])) {
            newArr.push(array1[i]);
        }
    }
    return newArr;
}

console.log(findCommonElements(arr1, arr2));

// const num1 = [1, 2, 3];
// const num2 = [2, 3, 4];

// function findCommonElements(array1, array2) {
//     const array3 = array1.concat(array2);
//     return array3;
// }

// const array3 = findCommonElements(num1, num2);
// console.log(array3);

// const array4 = array3.filter((item, index) => {
//     return array3.indexOf(item) !== index;
// });
// console.log(array4);
