// Задание
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

//массив объектов в задании 25

// Пиши код ниже этой строки
const calculateTotalBalance = users => {
   return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
// Пиши код выше этой строки