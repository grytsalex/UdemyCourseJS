// window.addEventListener('load'); // js будет выполняться только после полной загрузки страницы всех ее компонентов(картинки, стили и тд.)

window.addEventListener("DOMContentLoaded", function () {
  // событие срабатывает после прогрузки DOM дерева (все теги)
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"); // получаем все табы
  info = document.querySelector(".info-header"); // получаем родитель табов он 1 на странице
  tabContent = document.querySelectorAll(".info-tabcontent"); // получаем контент табов

  function hideTabContent(a) {
    // функция скрывет наши табы принимает один технический аргумент
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show"); // удаляем у i - того элемента (таба) класс 'show'
      tabContent[i].classList.add("hide"); // добвляем класс hide     2эти строчки скрывает со странице все tab-content
    }
  }

  hideTabContent(1); // вставляем единицу цыкл стартует с 1, скрываем все tab-content  кроме 1го

  function showTabContent(b) {
    // функция показывает 1таб, передаем техн. параметр который позволяет показать именно тот tab-content который нам нужен
    if (tabContent[b].classList.contains("hide")) {
      // проверяем действительно ли этот елемент скрыт
      tabContent[b].classList.remove("hide"); // удаляем класс 'hide'
      tabContent[b].classList.add("show"); // добавляем class 'show'
    }
  }

  info.addEventListener("click", function (event) {
    // используем делегирование, помещаем обьект event для сравнениея с тем куда мы кликаем
    let target = event.target; // создаем переменную для удобства

    if (target && target.classList.contains("info-header-tab")) {
      // если мы кликаем четко в 'info-header-tab' то выполняем следующее
      for (let i = 0; i < tab.length; i++) {
        // перебираем все табы
        if (target == tab[i]) {
          // сравниваем табы с тем куда мы кликнули, и если совпадет то мы выполняем действие
          hideTabContent(0); // скрываем все табы
          showTabContent(i); // показываем только таб-контент который подходит тому табу на которые мы кликнули
          break;
        }
      }
    }
  });
});
