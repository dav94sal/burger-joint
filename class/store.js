const foodData = require("../data/food-data")

class Store {
  constructor(name) {
    this.name = name;
    this.menu = {};
    this.stock = {};
  };

  make(food, size = null) {
    this.stock[food] = foodData.newFood(food, size)
  };

  addToMenu(food) {
    if (!foodData[food]) return `${food} does not exist`
    let size;

    if (foodData[food].size) size = "med";

    this.menu[food] = foodData.newFood(food, size)
  };

  displayMenu() {
    for (let key in this.menu) {
      let food = this.menu[key]

      if (food.size) {
        console.log(
          `${food.name}: $${food.price}
          Large +$1
          Small -$1`
        )
      } else {
        console.log(`${food.name}: $${food.price}`)
      }

    }
  }
};

module.exports = Store;
