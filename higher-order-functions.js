
var shoppingList = [
  {name: 'Lettuce', price: 15, quantity: 1, category: 'food'},
  {name: 'Cabbage', price: 9, quantity: 1, category: 'food'},
  {name: 'Tomatoe', price: 10, quantity: 10, category: 'food'},
  {name: 'Cucumber', price: 11, quantity: 1, category: 'food'},
  {name: 'Fries', price: 10, quantity: 1, category: 'food'},
  {name: 'Cushions', price: 11, quantity: 1, category: 'household'},
  {name: 'Felix', price: 10, quantity: 1, category: 'pet'}
];

console.log(shoppingList.length);

//HIGHER-ORDER FUNCTIONS
// functions are values. You can exploit this by dividing your cde into small simple functions and devising them together using higher-order functions.

var lettuce = shoppingList.filter(function(shoppingItem) {
  return shoppingItem.name === 'Lettuce';
});

console.log(lettuce);

// Better yet:
var isLettuce = function(item) {
  return item.name === 'Lettuce';
};

var lettuce1 = shoppingList.filter(isLettuce);

console.log(lettuce1);
