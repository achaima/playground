var shoppingList = [
  {name: 'Lettuce', price: 15, quantity: 1, category: 'food'},
  {name: 'Cabbage', price: 9, quantity: 1, category: 'food'},
  {name: 'Tomatoe', price: 10, quantity: 10, category: 'food'},
  {name: 'Cucumber', price: 11, quantity: 1, category: 'food'},
  {name: 'Fries', price: 10, quantity: 1, category: 'food'},
  {name: 'Cushions', price: 11, quantity: 1, category: 'household'},
  {name: 'Felix', price: 10, quantity: 1, category: 'pet'}
];


//QUANTITY TOTAL
var totalItemPrice = shoppingList.map(function(x){
  return x.price * x.quantity;
});
console.log(totalItemPrice);

//TOTAL
var total = totalItemPrice.reduce(function(sum, item) {
  return sum = sum + item;
}, 0);
console.log('Total:',total);

var flattenArray = shoppingList.reduce(function(sum, item) {
  return sum.concat(item);
}, []);
console.log('flattenArray',flattenArray);
