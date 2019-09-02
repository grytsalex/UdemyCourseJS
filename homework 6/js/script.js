let  menuItem = document.getElementsByTagName('li'),
    menu = document.querySelector('.menu');
    img = document.querySelectorAll('.body');
   title =  document.getElementById('title');
  adv =  document.querySelector('.adv');
  pog = document.querySelector('.prompt');
//    adv = document.getElementsByClassName('adv');
//    column = document.getElementsByClassName('column');
//    div = document.getElementsByTagName('div');


// console.log(menuItem);

let newLi = document.createElement('li'),
    text = document.createTextNode("Пятый пункт");
    newLi.classList.toggle('menu-item');
    newLi.innerHTML = "Пятый пункт";
    menu.appendChild(newLi);

    // console.log(text);
    // console.log(newLi);
    // console.log(menuItem);

    menu.insertBefore(menuItem[2], menuItem[1]);
 
// console.log(img);
// img.style.background = '..img/apple_true.jpg';

document.body.style.background = "url('img/apple_true.jpg')";

title.innerHTML = 'Мы продаем только подлинную технику Apple';

// console.log(title);
// console.log(adv);
// console.log(column);
// console.log(div);

// function deleteAdv(div, adv){
// div.removeChild(document.getElementsByClassName(adv));
// }

adv.parentNode.removeChild(adv);


let answer = prompt("Какое у вас отношение к технике Apple?");

pog.innerHTML = answer;


console.log(answer);

