/**
Phase 5 - Constructor Function and Object Inheritance
*/

function Order(customer) {
  this.isDelivered = false;
  this.customer = customer;
  this.isReady = false;
}

Order.prototype.setReady = function(boolean) {
  this.isReady = boolean;
}

Order.prototype.setDelivered = function(boolean) {
  this.isReady = boolean;
}

function PizzaOrder(customer, toppings) {
  this.toppings = toppings;
  Order.call(this, customer);
}

PizzaOrder.prototype = Object.create(Order.prototype);

PizzaOrder.prototype.setBaked = function() {
  this.isBaked = true;
};

function WingOrder(customer, style) {
  this.style = style;
  Order.call(this, customer)
}

WingOrder.prototype = Object.create(Order.prototype);

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
  // `npx jest 'final/_tests/005_objectInheritance.test.js' --noStackTrace --watch`
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
