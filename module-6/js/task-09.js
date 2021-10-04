// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.


function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const changeArray = [];
  
    numbers.forEach(elm => {
    
      if (elm % 2 === 0) {
        changeArray.push(elm + value);
      } else {
        
        changeArray.push(elm);
       }
    });
    //for (let i = 0; i < numbers.length; i += 1) {
     // if (numbers[i] % 2 === 0) {
     //   changeArray.push(numbers[i] + value);
    //  }
   // }
  return changeArray;
    // Пиши код выше этой строки
  }