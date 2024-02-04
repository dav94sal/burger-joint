const foodData = require("./data/food-data");
const Store = require("./class/store")
const Order = require("./class/order");

const BurgerJoint = new Store("Dave's Burger Joint");

(function () {
  console.log("Dave's Burger Joint")
  for (let key in foodData) {
    if (typeof foodData[key] !== "function") BurgerJoint.addToMenu(key)
  }
})();

BurgerJoint.displayMenu()
