// Задание
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

// массив объектов в задании 25

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
   return users.filter(user => user.gender === gender).reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
// Пиши код выше этой строки