class FoodItem {
  constructor(name, type, price, size = null) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.size = size;
  }
}

module.exports = FoodItem;
