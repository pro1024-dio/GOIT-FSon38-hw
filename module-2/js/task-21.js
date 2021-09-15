// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.


function findLongestWord(string) {
  // Change code below this line
let longWord = "";
  const arrayWords = string.split(" ");
  
  for (let i = 0; i < arrayWords.length; i += 1)
    if (longWord.length < arrayWords[i].length) longWord = arrayWords[i];
  
return longWord;

  // Change code above this line
}