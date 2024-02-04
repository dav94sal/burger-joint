// const foodData = require("../data/food-data");

// const burger = foodData.Hamburger;
// const sandwich = foodData.Sandwich;
// const fries = foodData.Fries;

class FoodItem {
  constructor(name, type, price, size = null) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.price = price;
  }
}

module.exports = FoodItem;
