const { Entree, Appetizer, Drink } = require("../class/food-item")

// Turn our food data into Class items

// store initiated foods in a hash, items { "name": FoodItem }
// iterate over foodData and initiate by data "type"
// return items

function generateFoodItems(foodData) {
    const items = {};
    for (let name in foodData) {
        let item = foodData[name];
        if (item.type === "entree") item = new Entree(item.name, item.type, item.price)
        else if (item.type === "appetizer") item = new Appetizer(item.name, item.type, price = null, sizePrices = item.size)
        else if (item.type === "drink") item = new Drink(item.name, item.type, price = null, sizePrices = item.size)

        items[name] = item
    };
    // console.log(items)
    return items;
};

module.exports = { generateFoodItems };
