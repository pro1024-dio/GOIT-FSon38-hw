// Задание
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

//массив объектов смотри в задании 18

// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
   return users.filter(user => user.friends.includes(friendName));
};
// Пиши код выше этой строки