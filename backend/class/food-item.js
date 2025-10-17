class Entree {
  constructor(name, type, price = null, sizePrices = {}) {
    this.name = name;
    this.type = type;
    this.price = price ? price : null;
    this.sizePrices = price ? null : sizePrices; // price will override sizePrices
  }
};

class Appetizer extends Entree {
  constructor(name, type, price = null, sizePrices) {
    super(name, type, price, sizePrices)
  }
};

class Drink extends Entree {
  constructor(name, type, price, sizePrices) {
    super (name, type, price, sizePrices)
  }
}

module.exports = {
  Entree,
  Appetizer,
  Drink
};
