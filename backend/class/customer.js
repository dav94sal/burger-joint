const Order = require("./order")

class Customer {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this.order = new Order()
  };

  placeOrder(menu) {
    // place a random order from the menu
    let items = Object.keys(menu.items)
    let item = items[Math.floor(Math.random() * items.length)]
    let foodItem = menu.getItem(item)
    if (foodItem.price > this.money) {
      return `${this.name} does not have enough money to order ${foodItem.name}.`
    } else {
      this.order.addToList(foodItem)
      this.money -= foodItem.price
      return `${this.name} ordered a ${foodItem.name} for $${foodItem.price}. They have $${this.money} left.`
    }
  }
}

module.exports = Customer
