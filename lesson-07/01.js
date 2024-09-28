/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// "hello world from javascript" = ["hello", "world", "from", "javascript"]

function capitalizeWords(str) {
    // let arr = str.split(" ");
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    //     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // }
    // return arr.join(" ");

    return str
        .split(" ")
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(" ");
}
console.log(capitalizeWords("hello world from javascript"));
