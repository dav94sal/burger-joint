class Menu{
    constructor(data) {
        this.items = this.populate(data);
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

    populate(items) {
        let menu = {};
        for (let key in items) {
            if (typeof items[key] !== "function") menu[key] = items[key];
        };
        return menu;
    };

    display() {
        console.log("Menu:");
        for (let key in this.items) {
            let item = this.items[key];
            let price = item.price || []

            if (item.size) {
                Object.entries(item.size).forEach(kvp => {
                    price.push(`${kvp[0]}: $${kvp[1]}`);
                });
            };

            console.log(`- ${item.name}: ${typeof price === "object" ? price.join(", ") : `$${price}`}`);
        };
    };
};

module.exports = Menu;
