/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/
Math.random() * 7;
Math.floor(Math.random() * 7);
const randomNumber = Math.floor(Math.random() * 7);
let dice1 = randomNumber; // your code
let dice2 = randomNumber; // your code
let isWinningDouble = (dice1 && dice1) > 3 && dice1 == dice2; // your code

// console.log("Первый бросок: " + dice1);
// console.log("Второй бросок: " + dice2);
// if (isWinningDouble) {
//     console.log("Выигрышный дубль!");
// } else {
//     console.log("Не выигрышный дубль.");
// }
