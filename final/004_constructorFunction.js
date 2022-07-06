/**
Phase 4 - Constructor Function
*/

function PizzaOrder(customer, toppings) {
  this.customer = customer;
  this.toppings = toppings;
  this.isBaked = false;
}

PizzaOrder.prototype.setBaked = function() {
  this.isBaked = true;
};

const adamsPizzaOrder = new PizzaOrder('Adam', 
  [
    'pepperoni', 
    'mozzarella', 
    'crushed tomato', 
    'basil', 
    'chili oil', 
    'Ojai wildflower honey'
  ]
);

/**
 * Requirements
 */

// 1. Return expected values?
  // open your terminal in project directory
  // `npx jest 'final/_tests/004_constructorFunction.test.js' --noStackTrace --watch`
  // hit enter
  // hit control + c to exit

// 2. Repeatable and predictable?

// 3. Memory efficient?

// 4. Readable and maintainable?

module.exports = {
  PizzaOrder,
}
