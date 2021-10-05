// Задание
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).

// массив объектов в задании 25

// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
   return [...users].sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length).map(user => user.name);
};
// Пиши код выше этой строки