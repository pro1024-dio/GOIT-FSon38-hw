// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).


function filterArray(numbers, value) {
   // Change code below this line
const resultArray = [];
  for (let i = 0; i <= numbers.length; i += 1) if (numbers[i] > value) resultArray.push(numbers[i]);

return resultArray;
  // Change code above this line
}