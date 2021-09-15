// Задание
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.


function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
return ((firstArray.length + secondArray.length) > maxLength) ? firstArray.concat(secondArray).slice(0, maxLength) : firstArray.concat(secondArray);


    // Change code above this line
  }