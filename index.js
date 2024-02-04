const foodData = require("./data/food-data");
const Order = require("./class/order")

// console.log(foodData.Hamburger)
// console.log(foodData.Fries)

console.log(foodData.newFood("Hamburger"));
console.log(foodData.newFood("Fries", "large"));
console.log(foodData.newFood("Drink", "med"));
