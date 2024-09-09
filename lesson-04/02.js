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

let num = [1, 2, 3, 2, 1, 4];

function findUniqueElements(array) {
    for (let i = 0; i < array.length; i++) {
        if ((array = [...new Set(array)])) {
            const numNew = [...new Set(array)];
            return numNew;
        }
    }
}
const numNew = findUniqueElements(num);

console.log(numNew);
