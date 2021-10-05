// Задание
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .


// Пиши код ниже этой строки
const getSortedFriends = users => {
   return users.flatMap(user => user.friends).filter((friend, ind, array) => array.indexOf(friend) === ind).sort((friendFirst, friendSecond) => friendFirst.localeCompare(friendSecond));
};
// Пиши код выше этой строки