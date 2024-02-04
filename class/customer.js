const Order = require("./order")

class Customer {
  constructor(name, money) {
    this.name = name;
    this.money = money;
    this.order = new Order()
  }
}

module.exports = Customer
