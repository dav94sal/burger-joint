class Order {
  constructor() {
    this.list = {}
    this.count = 0;
  };

  addToList(item) {
    this.count++;
    this.list[count] = item;
  }
}

module.exports = Order;
