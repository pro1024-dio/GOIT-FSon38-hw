// Задание
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.


// Change code below this line
function findMatches(array, ...otherArgs) {
  const matches = []; // Don't change this line

  for (const arg of otherArgs) {
  
    if (array.includes(arg)) {
    
      matches.push(arg);
    };
  };
  // Change code above this line
  return matches;
}
