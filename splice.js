var shoppingList = [
  {name: 'Lettuce', price: 15, quantity: 1, category: 'food'},
  {name: 'Cabbage', price: 9, quantity: 1, category: 'food'},
  {name: 'Tomatoe', price: 10, quantity: 10, category: 'food'},
  {name: 'Cucumber', price: 11, quantity: 1, category: 'food'},
  {name: 'Fries', price: 10, quantity: 1, category: 'food'},
  {name: 'Cushions', price: 11, quantity: 1, category: 'household'},
  {name: 'Felix', price: 10, quantity: 1, category: 'pet'}
];

//REMOVE FROM SHOPPING CART
var removeFromShoppingCart = function(removeItem) {
  var index = shoppingList.indexOf(removeItem);
  console.log(index, 1);
  shoppingList.splice(index, 1);
  return shoppingList;
};
console.log(removeFromShoppingCart(shoppingList[4]));
