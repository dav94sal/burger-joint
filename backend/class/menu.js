class Menu{
    constructor(items) {
        this.items = items;
    };

    addItem(item) {
        this.items[item.name] = item;
    };

    removeItem(item) {
        delete this.items[item.name];
    };

    getItem(name) {
        return this.items[name];
    };

    display() {
        console.log("Menu:");
        for (let key in this.items) {
            let Item = this.items[key];
            let price = Item.price || []

            if (Item.sizePrices) {
                Object.entries(Item.sizePrices).forEach(kvp => {
                    price.push(`${kvp[0]}: $${kvp[1]}`);
                });
            };

            console.log(`- ${Item.name}: ${typeof price === "object" ? price.join(", ") : `$${price}`}`);
        };
    };
};

module.exports = Menu;
