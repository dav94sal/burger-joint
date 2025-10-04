class Order {
  constructor(name="Guest") {
    this.customerName = name
    this.list = {}
    this.count = 0;
  };

  addToList(item) {
    this.list[item.name] = item;
    this.count++;
  };

  removeFromList(item) {
    delete this.list[item.name];
    this.count--;
  };

  getTotal() {
    let total = 0;
    for (let key in this.list) {
      let value = this.list[key];
      total += value.price
    };
    return total;
  };

  printReceipt() {
    console.log(`Order for ${this.customerName}`);
    this.items.forEach(i => console.log(`- ${i.name}: $${i.price}`));
    console.log(`Total: $${this.getTotal()}`);
  }
}

module.exports = Order;
