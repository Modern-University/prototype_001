import { PizzaOrder } from '../004_constructorFunction.js';

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

test('adamsPizzaOrder exists', () => {
  expect(typeof adamsPizzaOrder).toBe('object');
});

test('Object has customer property', () => {
  expect(adamsPizzaOrder.customer).toBe('Adam');
});

test('Object has toppings property', () => {
  expect(adamsPizzaOrder.toppings).toStrictEqual([
    'pepperoni', 
    'mozzarella', 
    'crushed tomato', 
    'basil', 
    'chili oil', 
    'Ojai wildflower honey'
  ]);
});

test('Object has isBaked property', () => {
  expect(adamsPizzaOrder.isBaked).toBe(false);
});

test('setBaked function works', () => {
  adamsPizzaOrder.setBaked(true); // => test setBaked
  expect(adamsPizzaOrder.isBaked).toBe(true);
});

test('Instance instanceof PizzaOrder', () => {
  expect(adamsPizzaOrder instanceof PizzaOrder).toBe(true);
});
