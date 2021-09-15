// Задание
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.


function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

  string = array.join(delimeter); 

  // Change code above this line
  return string;
}