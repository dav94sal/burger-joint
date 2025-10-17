const Menu = require("./menu");

class Restaurant {
  constructor(name, menu = {}) {
    this.name = name;
    this.menu = new Menu(menu);
    this.orders = [];
    // this.stock = {};
  };

  addToMenu(item) {
    this.menu.addItem(item)
  };

  removeFromMenu(item) {
    this.menu.removeItem(item)
  };

  displayMenu() {
    this.menu.display();
  };

  acceptOrder(order) {
    this.orders.push(order)
  }

  // make(food, size = null) {
  //   this.stock[food] = foodData.newFood(food, size)
  // };
};

module.exports = Restaurant;
