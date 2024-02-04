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

  "Drink": {
    "name": "Drink",
    "type": "drink",
    "size": {
      "small": 1,
      "med": 2,
      "large": 3
    }
  },

  "calcSizePrice": (obj, size) => {
    return obj.size[size]
  },

  "newFood": (name, size = null) => {
    if (!foodData[name]) return `${name} does not exist`;
    let data = foodData[name]
    let price;

    if (!data.price) {
      if (!size) return `${name} requires a size`;
      if (!data.size[size]) return `Invalid Size`;
      price = foodData.calcSizePrice(data, size);
    } else price = data.price;

    return new FoodItem(data.name, data.type, price, size);

  }
}

module.exports = foodData;
