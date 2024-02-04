class Order {
  constructor() {
    this.list = {}
    this.count = 0;
  };

  addToList(item) {
    this.count++;
    this.list[item.name] = item;
  };

  removeFromList(item) {
    this.count--;
    delete this.list[item.name];
  }
}

module.exports = Order;
