// Задание
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.


function getCommonElements(array1, array2) {
  // Change code below this line
const resultArray = [];
  for (let i = 0; i <= array1.length; i += 1) if (array2.includes(array1[i])) resultArray.push(array1[i]);

return resultArray;
 // Change code above this line
}