// Задание
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// массив объектов в задании 18

// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
   return users.filter(user => !user.isActive);
};
// Пиши код выше этой строки