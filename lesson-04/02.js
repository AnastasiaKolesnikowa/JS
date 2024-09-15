/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// let num = [1, 2, 3, 2, 1, 4];

// function findUniqueElements(array) {
//     for (let i = 0; i < array.length; i++) {
//         if ((array = [...new Set(array)])) {
//             const numNew = [...new Set(array)];
//             return numNew;
//         }
//     }
// }
// const numNew = findUniqueElements(num);

// console.log(numNew);

// const array = [1, 2, 3, 2, 1, 4];

// function includesElement(array, element) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }

// function findUniqueElements(array) {
//     const uniqueElements = [];
//     for (let i = 0; i < array.length; i++) {
//         if ((array = [...new Set(array)])) {
//             const uniqueElements = [...new Set(array)];
//             return uniqueElements;
//         }
//     }
// }

// console.log(findUniqueElements(array));

const array = [1, 2, 3, 3, 2, 1];

function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

function findUniqueElements(array) {
    const uniqueElements = [];
    for (let i = 0; i < array.length; i++) {
        if (!includesElement(uniqueElements, array[i])) {
            uniqueElements.push(array[i]);
        }
    }
    return uniqueElements;
}

// console.log(findUniqueElements(array));
