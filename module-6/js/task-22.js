// Задание
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

//смотри массив обхектов в задании 18

// Пиши код ниже этой строки
const getActiveUsers = (users) => {
   return users.filter(user => user.isActive);
};
// Пиши код выше этой строки