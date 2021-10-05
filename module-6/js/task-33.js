// Задание
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

//массив объектов в задании 25


// Пиши код ниже этой строки
const getTotalFriendCount = users => {
   return users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);
};
// Пиши код выше этой строки
