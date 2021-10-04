// Задание
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

// Пиши код ниже этой строки
const  calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => totalPrice += item);

  return totalPrice;
}
// Пиши код выше этой строки