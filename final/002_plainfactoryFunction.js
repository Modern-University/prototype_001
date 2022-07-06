/** 
Phase 2 - Plain Factory Function
*/

function createPizzaOrder(customer, toppings) {
  const pizza = {};
  pizza.customer = customer;
  pizza.toppings = toppings;
  pizza.isBaked = false,
  pizza.setBaked = function () {
    this.isBaked = true;
  };
  return pizza;
}

const adamsPizzaOrder = createPizzaOrder('Adam', 
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
  // `npx jest 'final/_tests/002_plainfactoryFunction.test.js' --noStackTrace --watch`
  // hit enter
  // hit control + c to exit

// 2. Repeatable and predictable?

// 3. Memory efficient?

// 4. Readable and maintainable?

module.exports = {
  createPizzaOrder,
};
