const foodData = require("./data/food-data");
const Order = require("./class/order")

const newOrder = new Order();
const hamburger = foodData.newFood("Hamburger");
const fries = foodData.newFood("Fries", "large");
const drink = foodData.newFood("Drink", "med")

/* Order: debugging
*/

newOrder.addToList(hamburger);
newOrder.addToList(fries);
newOrder.addToList(drink);

newOrder.removeFromList(drink);

console.log(newOrder)

/* foodData: debugging

console.log(foodData.Hamburger)
console.log(foodData.Fries)

console.log(foodData.newFood("Hamburger"));
console.log(foodData.newFood("Fries", "large"));
console.log(foodData.newFood("Drink", "med"));

*/
