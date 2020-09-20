let money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите сюда дату в формате YYYY-MM-DD");

let appData = {
  budget: money,
  timedata: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце");
  b = prompt("Во сколько обойдется?");

  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    appData.expenses[a] = b;
  } else {
    i--;
  }
}

/*
While
let i = 0;
while (i<2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце");
        b = prompt("Во сколько обойдется?");

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50)
    {
        appData.expenses[a] = b;
        i++;
    } else {
        i--;
};

do while
let i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце");
        b = prompt("Во сколько обойдется?");

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50)
    {
        appData.expenses[a] = b;
	} else {
		i--;
	{
		i++;
	}
} while ( i < 2) {}
*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("высокий уровень достатка");
} else {
  console.log("произошла ошибка");
}
