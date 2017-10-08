var shoppingList = [
  {name: 'Lettuce', price: 15, quantity: 1, category: 'food'},
  {name: 'Cabbage', price: 9, quantity: 1, category: 'food'},
  {name: 'Tomatoe', price: 10, quantity: 10, category: 'food'},
  {name: 'Cucumber', price: 11, quantity: 1, category: 'food'},
  {name: 'Fries', price: 10, quantity: 1, category: 'food'},
  {name: 'Cushions', price: 11, quantity: 1, category: 'household'},
  {name: 'Felix', price: 10, quantity: 1, category: 'pet'}
];


// FILTER SEARCH BOX BY NAME
var searchBox = function filterItems(query){
  return shoppingList.filter(function(item) {
    return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
};
console.log(searchBox('Felix'));

// FILTER
var filterItems = function(categoryOrItem) {

  categoryOrItem = categoryOrItem.toLowerCase();
  var RegEx = new RegExp(categoryOrItem);
  var filteredShoppingList = [];


  shoppingList.forEach(function(item){
    if (item.category.match(RegEx) || item.name.match(RegEx))
      filteredShoppingList.push(item);
  });
  return filteredShoppingList;
};

console.log(filterItems('HouseHold'));
