// Задание
// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(num => num%2 === 0);
const anyElementInFirstIsOdd = firstArray.some(num => num%2 !== 0);

const anyElementInSecondIsEven = secondArray.some(num => num%2 === 0);
const anyElementInSecondIsOdd = secondArray.some(num => num%2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(num => num%2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(num => num%2 !== 0);
