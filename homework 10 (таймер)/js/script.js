window.addEventListener('DOMcontentLoaded', function() {
    
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
            for (let i = 0; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent();

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')) { 
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2019-09-03';    // 

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()); // передаем дедлайн и отнимаем от него текущую дату (все в милисекундах)
        let seconds = Math.floor((t/1000) % 60); // вычленяем кол-во целых минут и берем остаток 
        let minutes = Math.floor((t/100/60) % 60); // получаем кол-во часов и оставляем остаток в виде минут
        let hours = Math.floor((t/(1000*60*60)));   // из всего кол-ва милисекунд взяли кол-во целых часов
        /*
        hours = Math.floor((Math.floor((t/100/60) % 24))); // получим хвостик с часами
        days = Math.floor((t/(1000*60*60*24))); // получаем дни
        */
       return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
       };
    }

    function setClock(id, endtime){ // выставляет и запускает наши часы
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000);

        function updateClock(a) { // функция записывает в верстку наши данные
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);
 });