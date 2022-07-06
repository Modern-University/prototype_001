/**
Phase 5 - Constructor Function and Object Inheritance
*/

function Order() {
  
}


function PizzaOrder() {
  
}

function WingOrder() {

}

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

const adamsWingOrder = new WingOrder('Adam', 'Sweet & spicy tamarind bbq');

/**
 * Requirements
 */

// 1. Return expected values?
  // open your terminal in project directory
  // `npx jest 'starter/_tests/005_objectInheritance.test.js' --noStackTrace --watch`
  // hit enter
  // hit control + c to exit

// 2. Repeatable and predictable?

// 3. Memory efficient?

// 4. Readable and maintainable?

module.exports = {
  PizzaOrder,
  Order,
  WingOrder,
};
