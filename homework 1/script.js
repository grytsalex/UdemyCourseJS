let money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите сюда дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timedata: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

let a = prompt("Введите обязательную статью расходов в этом месяце");
b = prompt("Во сколько обойдется?");

appData.expenses[a] = b;

let moneyPerDay = alert("Ежедневный бюджет: " + appData.budget / 30);

console.log(moneyPerDay);
console.log(appData);
