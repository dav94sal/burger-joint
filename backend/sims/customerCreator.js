const Customer = require("../class/customer");

const names = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack", "Kyle", "Lyle",
    "Michael", "Nina", "Oscar", "Paul", "Quinn", "Rachel", "Sam", "Tina", "Uma", "Vince", "Wendy", "Xander", "Yara", "Zane"
];

function createCustomers(num) {
  let customers = [];
  for (let i = 0; i < num; i++) {
    let name = names[Math.floor(Math.random() * names.length)];
    let money = Math.floor(Math.random() * 40) + 5; // Random money between $5 and $45
    customers.push(new Customer(name, money));
  }
  return customers;
}

module.exports = { createCustomers };
