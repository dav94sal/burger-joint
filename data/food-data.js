const { Entree, Appetizer, Drink } = require("../class/food-item");

const foodData = {
  "Hamburger": {
    "name": "Hamburger",
    "type": "entree",
    "price": 5
  },

  "Sandwich": {
    "name": "Sandwich",
    "type": "entree",
    "price": 4
  },

  "Fries": {
    "name": "Fries",
    "type": "appetizer",
    "size": {
      "small": 1,
      "med": 2,
      "large": 3
    }
  },

  "CheeseSticks": {
    "name": "CheeseSticks",
    "type": "appetizer",
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

  "instantiate": (name, type, price, size) => {
    if (type === "entree") return new Entree (name, type, price)
    if (type === "appetizer") return new Appetizer(name, type, price, size)
    if (type === "drink") return new Drink(name, type, price, size)
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

    return foodData.instantiate(data.name, data.type, price, size);

  }
}

module.exports = foodData;
