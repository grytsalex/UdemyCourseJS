let startBtn = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpencesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  expensesBtn = document.getElementsByTagName("button")[0],
  optionalExpensesBtn = document.getElementsByTagName("button")[1],
  countBudgetBtn = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  incomeItem = document.querySelector(".choose-income"),
  checkSavings = document.querySelector("#savings"),
  sumValue = document.querySelector("#sum"),
  percentValue = document.querySelector("#percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

let money, time;

startBtn.addEventListener("click", function () {
  time = "2019-08-18";
  money = +prompt("Ваш бюджет на месяц?");

  while (isNaN(money) || money == "" || money == null) {
    money = prompt("Ваш бюджет на месяц?");
  }
  appData.budget = money;
  appData.timedata = time;

  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear(); // parse() конвентирует полученное время в милисекунды с 1 января 1970
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1; // добавляем единицу по скольку, исчисление начинаеться с 0 и получаеться 11 месяцев
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener("click", function () {
  // при клике запускаеться функция
  let sum = 0; // переменная суммы собирает все ценники что ввел ползователь

  for (let i = 0; i < expensesItem.length; i++) {
    // цикл работает до момента окончания 'imput' на странице
    let a = expensesItem[i].value; // присваиваем в 'a' то что ввел пользовательв наименование
    let b = expensesItem[++i].value; // в 'b' попадает значение введенное в цене

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      appData.expenses[a] = b; // в глобальный обьект записываем новый обьект
      sum += +b; // собираем сумму всех значений которые ввел пользователь
    } else {
      i = i - 1; // возвращаемся к вопросу снова
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpencesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBudgetBtn.addEventListener("click", function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "минимальный уровеь достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "средний уровень дстатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "высокий уровень дстатка";
    } else {
      levelValue.textContent = "произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

incomeItem.addEventListener("input", function () {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener("input", function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timedata: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
