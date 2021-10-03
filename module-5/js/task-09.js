// Задание
// Выполни рефакторинг кода, заменив функцию-конструктор Car на класс с методом-конструктором, принимающим объект.

class  Car {
  
  brand;
  model;
  price;

constructor({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
};