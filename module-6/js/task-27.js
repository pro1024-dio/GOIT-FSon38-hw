// Задание
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.

// массив объектов в задании 25

// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
   return users.every(user => user.isActive);
};
// Пиши код выше этой строки