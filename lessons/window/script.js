let box = document.querySelector(".box");
btn = document.querySelector("button");

let width = box.clientWidth, // clientWidth - свойство, показывает значение без полосы прокрутки
  height = box.clientHeight;
/*
    height = box.offsetWidth;   // offsetWidth -  свойство, захватывает и border и полосу прокрутки, значение совпадает с CSS
    width = box.offsetWidth;    


    height = box.scrollHeight;  // scrollHeigh - свойтво, показывает высоту всего нашего элемента с прокруткой, но не считает саму полосу прокрутки
    width = box.scrollWidth;
*/
console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth); // получаем ширину document
console.log(document.documentElement.clientHeight);

console.log(document.documentElement.scrollTop); // сколько пролистано на странице

btn.addEventListener("click", function () {
  /*
        box.scrollHeight = 1500; // присвоить значение нельзя поскольку свойство используеться только для чтения
        box.style.height = box.scrollHeight + 'px';    // меняем высоту box на высоту всего контента внутри, получаем разворачивание всего контента по клику
        console.log(height);
        console.log(box.scrollTop); // выводим в растояние которое было прокрученно
        */
  box.scrollTop = 0; // по клику возвращает нас вверх прокрутки, изменяемые параметры
});

scrollBy(0, 200); // перемещает страницу на 200px вниз
scrollTo(0, 200); // перемещает страницу на 200_тый px страницы, начиная с сверха страницы
