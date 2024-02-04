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
  };

  getTotal() {
    let total = 0;
    for (let key in this.list) {
      let value = this.list[key];
      total += value.price
    };
    return total;
  }
}

module.exports = Order;
