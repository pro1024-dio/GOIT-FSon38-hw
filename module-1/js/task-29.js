// Задача: доставка товара
// Задание
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"\


function getShippingCost(country) {
  let message;
  let price;
  // Change code below this line
switch (country) {

  case "China":
    price = 100;
    break;
  
  case "Chile":
    price = 250;
    break;
  
  case "Australia":
    price = 170;
    break;
    
  case "Jamaica":
    price = 120;
    break;
    
  default:
    price = 0;
}
  
  message = price ? `Shipping to ${country} will cost ${price} credits` : "Sorry, there is no delivery to your country";
  // Change code above this line
  return message;
}