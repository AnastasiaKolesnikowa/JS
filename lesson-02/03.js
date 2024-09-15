/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70; // тестовое значение, можно изменять
let grade;

if (score <= 49) {
    grade = "F";
}
if (score <= 69 && score >= 50) {
    grade = "D";
}
if (score <= 79 && score >= 70) {
    grade = "C";
}
if (score <= 89 && score >= 80) {
    grade = "B";
}
if (score <= 100 && score >= 90) {
    grade = "A";
}

// console.log(grade);
// your code
