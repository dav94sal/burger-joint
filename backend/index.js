const foodData = require("./data/food-data");
const Restaurant = require("./class/restaurant");
const { createCustomers } = require("./sims/customerCreator");
const { generateFoodItems } = require("./sims/foodGenerator")

const items = generateFoodItems(foodData);
const BurgerJoint = new Restaurant("Dave's Burger Joint", items);

(function () {
  console.log(`Welcome to ${BurgerJoint.name}!\n`);
})();

BurgerJoint.displayMenu();
const customers = createCustomers(3);
console.log("\nCustomers:");
customers.forEach(c => console.log(`- ${c.name} ($${c.money})`));
