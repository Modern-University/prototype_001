/** 
Phase 1 - Literal Object
*/

const adamsPizzaOrder = {
  customer: 'Adam',
  toppings: ['pepperoni', 
    'mozzarella', 
    'crushed tomato', 
    'basil', 
    'chili oil', 
    'Ojai wildflower honey'
  ],
  isBaked: false,
  setBaked: function (boolean) {
    this.isBaked = boolean;
  }
};

/**
 * Requirements
 */

// 1. Return expected values?
  // open your terminal in project directory
  // `npx jest 'final/_tests/001_objectLiteral.test.js' --noStackTrace --watch`
  // hit enter
  // hit control + c to exit

// 2. Repeatable and predictable?

// 3. Memory efficient?

// 4. Readable and maintainable?

module.exports = {
  adamsPizzaOrder,
};
