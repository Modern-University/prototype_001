# Prototype

These are the starter files to code along with me to learn about JavaScript's prototype feature.

This is argueably the most important feature of JavaScript.

It seems hard from the outside but when you slow down you can see that it's not.

## Install
`npm i`

## Run Tests
Command is included at the bottom of each file.

## Goal
Create a pizza order that will be an object

## Requirmentments
1. Returns expected values
```js
const pizzaOrder = ...;
pizzaOrder.customer;
pizzaOrder.toppings;
pizzaOrder.isBaked;
pizzaOrder.setBaked(true);
```

**Phase 5**
```js
const pizzaOrder = ...;
const wingWorder = ...;

pizzaOrder.customer;
pizzaOrder.toppings;
pizzaOrder.isReady;
pizzaOrder.setReady(true);

wingOrder.customer;
wingOrder.style;
wingOrder.isReady;
wingOrder.setReady(true);
```

2. Repeatable and predictable
- Can we easily create new pizza orders?
- Will all new pizza orders have the same properties?

3. Memory efficient
- Do you not duplicate data?

4. Readable and maintainable?
- Is your code easy to reason about for a new team member?
- Can you easily change/add to your code?