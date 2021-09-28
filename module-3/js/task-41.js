// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
    
      if (potion.name === newPotion.name) {
      	return `Error! Potion ${newPotion.name} is already in your inventory!`;
      };
    };

    this.potions.push(newPotion);
  },
  removePotion(potionName) {

    for (const potion of this.potions) {
    
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1);
      	return;
      };
    };
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    
    for (const potion of this.potions) {
    
      if (potion.name === oldName) {
        potion.name = newName;
        return;
      };
    };
   
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
