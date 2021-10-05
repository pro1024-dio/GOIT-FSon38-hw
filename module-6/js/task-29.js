// Задание
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.

// массив объектов в задании 25

// Пиши код ниже этой строки
const isAnyUserActive = users => {
   return users.some(user => user.isActive);
};
// Пиши код выше этой строки