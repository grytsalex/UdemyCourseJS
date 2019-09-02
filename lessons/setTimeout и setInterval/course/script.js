// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId); // останавливает setTimeout

// let timerId = setInterval(sayHello, 3000);
//     clearTimeout(timerId); // останавливает setTimeout

// function sayHello() {
//     console.log("Hello World");
// }


                                           // рекурсивный вызов setTimeout
/*    let timerId = setTimeout(function log() {
    console.log("Hello!");
    setTimeout(log, 2000);  // рекурсия позволяющая функции внутри успеть сделать до момента ее повторения(интервала)
}); */


let btn = document.querySelector('.btn'),
    box = document.querySelector('.box');

    function myAnimation() {
        let pos = 0; // задаем изначальную позицию которая равно 0

        let timerId = setInterval(frame(), 10); // каждые 10мс запускаем фрейм
        function frame() {  // отвечает з то, что бы изменять координаты top и left
            if (pos == 300) {   // координаты остановки box
                clearInterval(timerId); // отвечает за остановку box
            } else {
                pos++; // увеличиваем позицию  на 1
                box.style.top = pos + 'px'; // вытаскиваем координаты box
                box.style.top = left + 'px';
            }
        }
    }
btn.addEventListener('click', myAnimation);

  let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

    btnBlock.addEventListener('click', function (event){
        // if (event.target && event.target.classList.contains('first') ){ // проверка на то что сделали click на элемент с эти классом
            // if (event.target && event.target.tagName == 'BUTTON' ){  // проркарка на то что мы click на элемент с тегом <button> 
       if (event.target && event.target.matches('button.first') ){ // ищем совпадение 
            console.log("Hello");
        }
});
