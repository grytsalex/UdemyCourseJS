// // let Num = 20;
// // function showFirstMessage(text){
// //     alert(text);
// //     let num = 10;
// //     console.log(num);

// // };

// // showFirstMessage("pogchamp");
// // console.log(Num);


// // let calc = function(a,b){
// //      return(a+b);
// // }


// let calc = (a,b) => a+b

// console.log(calc(3,4));

// console.log(calc(8,7));


// function returnVar(){
//     let num = 50;
//     return num;
// }

// let anotherNum = returnVar();
// console.log(anotherNum);


// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());

// console.log(str.toLowerCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));

// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));



// //1) В Js существует 7 типов данных: число, строка, булевое значение(true,false), обьект, undefined, null, symbol.
// //2) Для того что бы, вывести информацию в консоль существует команда console.log().
// // 3) Функция оператора || "или" заключаеться в том что одно из условий должно быть верно, && "и" оба условия 
// // должны быть верны.


//                 // Цыкл while
//  /*
//     var i = 0;
//     while (i < 2) {
//        i++;     
//        let  a = prompt("Введите обязательную статью расходов в этом месяце", '');
//        b = prompt("Во сколько обойдеться", '');
//  } 
//  */


//                 // Цыкл do while 
//  /*
//  i = 0;
//  do {
//      i++;
//      let  a = prompt("Введите обязательную статью расходов в этом месяце", '');
//      b = prompt("Во сколько обойдеться", '');
//  } while (i < 2);
//  */

                        //Callback
/*
function first() {
    //Что то делаем 
    setTimeout( function() {
    console.log(1); 
    }, 500 );
}

function second(){
    console.log(2);
}

first();
second();



function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {                       // Callback функция вне основной функции
    console.log("Я прошел 3й урок");
}

learnJS("Javascript", done);
*/



                                //Object
// let obj = new Object();    не лучший вариант для создания обьектов


/*
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.color = {               // обьект с элементом обьект
    border: "blcak",
    bg: "red"
};

delete options.bool;            // удаляем свойство из обьекта

console.log(options);


                        // Перебираем элементы обьекта
for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key] );
}

console.log(Object.keys(options).length);
*/



                            // Array
// let arr = ["first", 2, 3, "four", 5];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " ( массив: " + mass + ")");
// });

// console.log(arr);


                // Перебор значений массива
// let mass = [1, 3, 4, 6, 7];

// for (let key of  mass) {
//     console.log(key);
// }


// arr[99] = 99;
// console.log(arr.length );

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.pop();          убираем последний элемент
// arr.push("5");       добавляем в конец элемент
// arr.shift();         убираем первый элемент
// arr.unshift("1");    добавляем элемент в начало


                    // Разбиваем строку с элементами массива
// let ans = prompt("", ""),
//   arr = [];

//  arr = ans.split(',');
//  console.log(arr);


                    // Записываем элементы массива в одну строчку с разделителем
// let arr = ["awe", "wto", "buta", "pog"],
//     i = arr.join(', ');
//     console.log(i);


                    // Сортируем числа в массиве по возрастанию с помощью callback функции
// let arr = [1,15,4];
//     i = arr.sort(compareNum);
// function compareNum(a,b) {
//     return a-b;
// } 

//     console.log(arr);


                    // ООП
let soldier = {
    health: 400,
    armor:  100
};

let john = {
    health: 100 
};

john_proto_ = soldier; //назначаем для обьекта john прототипом обьект soldier, теперь john наследуеться от soldier
console.log(john);
console.log(john.armor);


					//
function hello() {
    console.log("Hello World");
}
hello();

function hi(){
    console.log("Hello World"); 
} 
hi();

let arr = [1, 15, 30, 42];
    i = arr.sort[compareNum];
function compareNum() {
    return a-b;
}
console.log(arr);