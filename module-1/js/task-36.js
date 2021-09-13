// Задача: проверка спама
// Задание
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.


function checkForSpam(message) {
  let result;
  // Change code below this line
  result = message.toUpperCase().includes("SPAM") || message.toUpperCase().includes("SALE");
  // Change code above this line
  return result;
}