const foodData = require("./data/food-data");
const foodData2 = require("./backend/data/food2")
const Store = require("./class/store")
const Order = require("./class/order");

/* Store: debugging

const BurgerJoint = new Store("Dave's Burger Joint");

BurgerJoint.addToMenu("Hamburger");
BurgerJoint.addToMenu("Fries");
BurgerJoint.addToMenu("Drink");


// console.log(BurgerJoint.menu);

BurgerJoint.displayMenu();

BurgerJoint.make("Hamburger");
BurgerJoint.make("Fries", "med");
BurgerJoint.make("Drink", "med");

console.log(BurgerJoint.name)
console.log(BurgerJoint.stock)

*/

/* Order: debugging

const newOrder = new Order();

const hamburger = foodData.newFood("Hamburger");
const fries = foodData.newFood("Fries", "large");
const drink = foodData.newFood("Drink", "med");

newOrder.addToList(hamburger);
newOrder.addToList(fries);
newOrder.addToList(drink);

// newOrder.removeFromList(drink);

console.log(newOrder.getTotal())

// console.log(newOrder)

*/

// /* foodData: debugging

// console.log(foodData.Hamburger)
// console.log(foodData.Fries)

// console.log(foodData.newFood("Hamburger"));
// console.log(foodData.newFood("Fries", "large"));
// console.log(foodData.newFood("Drink", "med"));

// */
