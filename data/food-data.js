const FoodItem = require("../class/food-item");

const foodData = {
  "Hamburger": {
    "name": "Hamburger",
    "type": "food",
    "price": 5
  },

  "Sandwich": {
    "name": "Sandwich",
    "type": "food",
    "price": 4
  },

  "Fries": {
    "name": "Fries",
    "type": "food",
    "size": {
      "small": 1,
      "med": 2,
      "large": 3
    }
  },

  "CheeseSticks": {
    "name": "CheeseSticks",
    "type": "food",
    "size": {
      "small": 1,
      "med": 2,
      "large": 3
    }
  },

  "Drinks": {
    "name": "Drinks",
    "type": "drink",
    "size": {
      "small": 1,
      "med": 2,
      "large": 3
    }
  },

  "newFood": (name, size = null) => {
    if (!this[name]) return `${name} does not exist`;
    const data = this[name];
    let price = data[price];
    if (size) price

    const newFood = new FoodItem(dataa.name, data.type, );
  }
}

module.exports = foodData;
