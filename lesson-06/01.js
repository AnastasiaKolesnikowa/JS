/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
    "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg", // 0
    "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg", // 1
    "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg", // 2
];

const img = document.getElementById("web-tech-image");
const prev = document.getElementById("prev-button");
const next = document.getElementById("next-button");
let index = 0;

prev.addEventListener("click", () => {
    if (index === 0) {
        let localIndex = WEB_TECH_IMAGES.length - 1;
        img.src = WEB_TECH_IMAGES[localIndex];
        index = localIndex;
    } else {
        img.src = WEB_TECH_IMAGES[index - 1];
        index--;
    }
});

next.addEventListener("click", () => {
    if (index === WEB_TECH_IMAGES.length - 1) {
        img.src = WEB_TECH_IMAGES[0];
        index = 0;
    } else {
        img.src = WEB_TECH_IMAGES[index + 1];
        index++;
    }
});

// const prevButton = document.querySelector("#prev-button");
// const nextButton = document.querySelector("#next-button");
// const slides = document.querySelector("#web-tech-image");
// const Index = document.querySelector("#index");

// let currentIndex = 0;

// prevButton.addEventListener('click', function() {
//     currentIndex = (currentIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length
//     slides.src = WEB_TECH_IMAGES[currentIndex]
//     console.log(currentIndex)
// })

// nextButton.addEventListener('click', function() {
//     currentIndex = (currentIndex + 1) % WEB_TECH_IMAGES.length
//     slides.src = WEB_TECH_IMAGES[currentIndex]
//     console.log(currentIndex)
// })

// function updateSlide(index) {
//     currentIndex = (index + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
//     slides.src = WEB_TECH_IMAGES[currentIndex];
//     console.log(currentIndex);
// }

// prevButton.addEventListener("click", function () {
//     updateSlide(currentIndex - 1);
// });

// nextButton.addEventListener("click", function () {
//     updateSlide(currentIndex + 1);
// });
