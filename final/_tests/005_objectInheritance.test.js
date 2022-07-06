import { Order, PizzaOrder, WingOrder } from '../005_objectInheritance.js';

describe('adamsPizzaOrder Tests', () => {
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
  
  test('Instance can be created', () => {
    expect(typeof adamsPizzaOrder).toBe('object');
  });
  
  test('Object has customer property', () => {
    expect(adamsPizzaOrder.customer).toBe('Adam');
  });
  
  test('Instance has toppings property', () => {
    expect(adamsPizzaOrder.toppings).toStrictEqual([
      'pepperoni', 
      'mozzarella', 
      'crushed tomato', 
      'basil', 
      'chili oil', 
      'Ojai wildflower honey'
    ]);
  });
  
  test('Instance has isReady property', () => {
    expect(adamsPizzaOrder.isReady).toBe(false);
  });
  
  test('Instance is an instanceof PizzaOrder', () => {
    expect(adamsPizzaOrder instanceof PizzaOrder).toBe(true);
  });
  
  test('Instance setReady works', () => {
    adamsPizzaOrder.setReady(true);
    expect(adamsPizzaOrder.isReady).toBe(true);
  });
  
  test('Instance instanceof Order', () => {
    expect(adamsPizzaOrder instanceof Order).toBe(true);
  });
});

describe('adamsWingOrder Tests', () => {
  const adamsWingOrder = new WingOrder('Adam', 'Sweet & spicy tamarind bbq');
  
  test('Instance can be created', () => {
    expect(typeof adamsWingOrder).toBe('object');
  });
  
  test('Object has customer property', () => {
    expect(adamsWingOrder.customer).toBe('Adam');
  });
  
  test('Instance has toppings property', () => {
    expect(adamsWingOrder.style).toBe('Sweet & spicy tamarind bbq');
  });
  
  test('Instance has isReady property', () => {
    expect(adamsWingOrder.isReady).toBe(false);
  });
  
  test('Instance is an instanceof PizzaOrder', () => {
    expect(adamsWingOrder instanceof WingOrder).toBe(true);
  });
  
  test('Instance setReady works', () => {
    adamsWingOrder.setReady(true);
    expect(adamsWingOrder.isReady).toBe(true);
  });
  
  test('Instance instanceof Order', () => {
    expect(adamsWingOrder instanceof Order).toBe(true);
  });
});