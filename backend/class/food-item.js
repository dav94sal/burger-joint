class Entree {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
};

class Appetizer extends Entree {
  constructor(name, type, price, size) {
    super(name, type, price)
    this.size = size;
  }
};

class Drink extends Appetizer {
  constructor(name, type, price, size) {
    super (name, type, price, size)
  }
}

module.exports = {
  Entree,
  Appetizer,
  Drink
};
