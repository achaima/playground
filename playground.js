//
// var shoppingList = [
//   {name: 'Lettuce', price: 15, quantity: 1, category: 'food'},
//   {name: 'Cabbage', price: 9, quantity: 1, category: 'food'},
//   {name: 'Tomatoe', price: 10, quantity: 10, category: 'food'},
//   {name: 'Cucumber', price: 11, quantity: 1, category: 'food'},
//   {name: 'Fries', price: 10, quantity: 1, category: 'food'},
//   {name: 'Cushions', price: 11, quantity: 1, category: 'household'},
//   {name: 'Felix', price: 10, quantity: 1, category: 'pet'}
// ];

// console.log(shoppingList.length);

// HIGHER-ORDER FUNCTIONS
//functions are values. You can exploit this by dividing your cde into small simple functions and devising them together using higher-order functions.

// var lettuce = shoppingList.filter(function(shoppingItem) {
//   return shoppingItem.name === 'Lettuce';
// });
//
// console.log(lettuce);

// Better yet
// var isLettuce = function(item) {
//   return item.name === 'Lettuce';
// };
//
// var lettuce = shoppingList.filter(isLettuce);
//
// console.log(lettuce);

// //FOR...OF LOOP
// for (const item of shoppingList) {
//   console.log(item);
// }


//FILTER SEARCH BOX BY NAME
// var searchBox = function filterItems(query){
//   return shoppingList.filter(function(item) {
//     return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   });
// };
// console.log(searchBox('Felix'));

//FILTER
// var filterItems = function(categoryOrItem) {
//
//   categoryOrItem = categoryOrItem.toLowerCase();
//   var RegEx = new RegExp(categoryOrItem);
//   var filteredShoppingList = [];
//
//
//   shoppingList.forEach(function(item){
//     if (item.category.match(RegEx) || item.name.match(RegEx))
//       filteredShoppingList.push(item);
//   });
//   return filteredShoppingList;
// };

// console.log(filterItems('HouseHold'));


// //INCREASE QUANTITY
// var increaseItemQuantity = function(item) {
//   return item.quantity++;
// };
// console.log(increaseItemQuantity(shoppingList[2]), 'shoppingList', shoppingList);
//
//
// //DECREASE QUANTITY
// var decreaseItemQuantity = function(item) {
//   return item.quantity--;
// };
// console.log(decreaseItemQuantity(shoppingList[2]), 'shoppingList', shoppingList);

// //SORT SHOPPING LIST BY QUANITY
// var sortShoppingListByQuantity = shoppingList.sort(function(a, b){
//   a.quantity - b.quantity;
// });
// console.log(sortShoppingListByQuantity);
//
// //SORT SHOPPING LIST BY PRICE
// var sortShoppingListByPrice = shoppingList.sort(function(a, b){
//   a.quantity - b.quantity;
// });
// console.log(sortShoppingListByPrice);


// //ADD TO SHOPPING CART
// var addToShoppingCart = function(potentialItem) {
//   console.log(potentialItem);
//   shoppingList.push(potentialItem);
//   return shoppingList;
// };
// console.log(addToShoppingCart({name: 'water', price: 1}));
//
//
// //REMOVE FROM SHOPPING CART
// var removeFromShoppingCart = function(removeItem) {
//   var index = shoppingList.indexOf(removeItem);
//   console.log(index, 1);
//   shoppingList.splice(index, 1);
//   return shoppingList;
// };
// console.log(removeFromShoppingCart(shoppingList[4]));
//
//
//QUANTITY TOTAL
// var totalItemPrice = shoppingList.map(function(x){
//   return x.price * x.quantity;
// });
// console.log(totalItemPrice);
//
//
// //TOTAL
// var total = totalItemPrice.reduce(function(sum, item) {
//   return sum = sum + item;
// }, 0);
// console.log('Total:',total);


//
// var flattenArray = shoppingList.reduce(function(sum, item) {
//   return sum.concat(item);
// }, []);
// console.log('flattenArray',flattenArray);


// CLOSURES

// Functions are also closures which means the function body has access to variables which are defined outside the function
//
// var me = 'Bruce Wayne';
// function greetMe() {
//   console.log('Hello ' + me + '!');
// }
// me = 'Batman';
// greetMe(me);


// CURRYING

//The idea with currying is that your function can pass through the application and gradually receive the agruements it needs.


// Not curried function
// let dragon = (name, size, element) =>
// name + ' is a ' +
// size + ' dragon that breathes ' +
// element + '!';
//
// console.log(dragon('fluffykinfs', 'tiny', 'lightening'));

// let dragon =
//   name =>
//     size =>
//       element =>
//         name + ' is a ' +
//         size + ' dragon that breathes ' +
//         element + '!';
//
// console.log(dragon('fluffykins')('tiny')('lightening'));
//
// let fluffykinDragons = dragon('fluffykins');
//
// console.log(fluffykinDragons('tiny')('lightening'));


// let dragons = [
//   { name: 'fluffykins', element: 'lightening'},
//   { name: 'noomi', element: 'lightening'},
//   { name: 'karo', element: 'fire'},
//   { name: 'doomer', element: 'timewarp'}
// ];
//
// let hasElement =
//   (element, obj) => obj.element === element;
//
// let lightingDragons =
//     dragons.filter(x => hasElement('lightening', x));
//
// console.log(lightingDragons);


// MUTABLE/IMMUTABLE KYLE SIMPSON

// const z = [4,5,6];
// z[1] = 9;
// console.log(z);

//PROMISES- FUNFUNFUNCTION

// PROMISE is something you can pass around and you can write code around it even though you don't have the value yet.
//
// const promiseToCleanTheRoom = new Promise(function(resolve, reject){
//   // cleaning the room
//
//   const isClean = false;
//
//   if(isClean) {
//     resolve(`clean`);
//   } else {
//     reject(`not clean`);
//   }
// });
//
// promiseToCleanTheRoom.then(function(fromResolve) {
//   console.log(`the room is ${fromResolve}`);
// }).catch(function(fromReject){
//   console.log(`the room is ${fromReject}`);
// });

// example 2

// const cleanRoom = function(){
//   return new Promise(function(resolve, reject){
//     resolve(`Cleaned the room`);
//   });
// };
// const removeGarbage = function(message){
//   return new Promise(function(resolve, reject){
//     resolve(`${message} remove Garbage`);
//   });
// };
// const winIcecream = function(message){
//   return new Promise(function(resolve, reject){
//     resolve(`${message} won Icecream`);
//   });
// };
//
// // cleanRoom().then(function(result){
// //   return removeGarbage(result);
// // }).then(function(result){
// //   return winIcecream(result);
// // }).then(function(result){
// //   console.log(`finished ${result}`);
// // }); //finished Cleaned the room remove Garbage won Icecream
//
// //All to finish
// // Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
// //   console.log(`all finished`);
// // });
//
// //Any one of them to finish
// Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
//   console.log(`one of them is finished`);
// }); //one of them is finished



//RECURSIONS - FUNFUNFUNCTION

// Recursion is a function calls itself inside of its own body

//

// let categories = [
//   { id: 'animals', 'parent': null},
//   { id: 'mammals', 'parent': 'animals'},
//   { id: 'cats', 'parent': 'mammals'},
//   { id: 'dogs', 'parent': 'mammals'},
//   { id: 'chihuahua', 'parent': 'dogs'},
//   { id: 'labrador', 'parent': 'dogs'},
//   { id: 'persian', 'parent': 'cats'},
//   { id: 'siamese', 'parent': 'cats'}
// ];
//
// let makeTree = (categories, parent) => {
//
//   let node = {};
//   categories
//   .filter(c => c.parent === parent)
//   .forEach(c => node[c.id] = makeTree(categories, c.id));
//   return node;
// };
//
// console.log(
//   JSON.stringify(
//     makeTree(categories, null)
//     , null, 2)
//   );

  // continued  - techsith
// let total = 0;
//
// for(let i = 1; i <= 3; i++) {
//   total += i;
// }
//
// console.log(total);
//
// let add = function(n) {
//   if(n <= 0) {
//     return 0;
//   } else {
//     return n + add(n-1);
//   }
// };
//
// console.log(add(3));

// whats basically happening behind the scenes
// function(3) {
//   return 3 + function (2) {
//     return 2 + function(1) {
//       return 1 + function(0) {
//         return 0;
//       }
//     }
//   }
// }

// STACK is basically LIFO
// Last In First Out
// Every browser has a different maximum amount of stack overflow

// let third = function(){
//
// };
//
// let second = function(){
//   third();
// };
//
// let first = function(){
//   seconds();
// }
//
// first();


// CLOSURE - KYLE SIMPSON
// function formatter(formatFn) {
//   console.log(formatFn);
//   return function inner(str){
//     console.log(str);
//     return formatFn( str );
//   };
// }
//
// var lower = formatter( function formatting(v){
//   console.log('v', v);
//   return v.toLowerCase();
// } );
//
// var upperFirst = formatter( function formatting(v){
//   return v[0].toUpperCase() + v.substr( 1 ).toLowerCase();
// } );
//
// console.log(lower('WOW'));				// wow
// console.log(upperFirst( 'hello' ));		// Hello


// continued FUN FUN FUNCTION
// In Javascript functions are also clousres what that means is that the function body has access to variable that is assigned outside the functions



//FUN FUN FUNCTION OBJECT CREATION JAVASCRIPT PT 1

// const dog = {
//   sound: 'woof',
//   talk: function() {
//     console.log(this.sound);
//   }
// };
//
// dog.talk();
//
// const talkFunction = dog.talk;
// const boundFunction = talkFunction.bind(dog);
// boundFunction(); //undefined

//PT2 - Examples of this and bind
//this is like how it is in english iit is context sensitive and is defined at the time of the call. It doesn;t just have one this. Functions are just sentence like in english you can use it in different contexts where it means different things. Unless you use bind then it bound to the thing you want it to be bound to. Functions are just values you can assigns them as you would with booleans or numbers.

// you should never do it like the following


// let talk = function() {
//   console.log(this.sound);
// }
//
// let boromir = {
//   blab: talk,
//   sound: 'One does not simply walk into mordor'
// };
//
// let gollum = {
//   jabber: boromir.blab,
//   sound: 'My precioussss....'
// }
//
// gollum.jabber();
//
// boromir.speak = talk.bind(boromir);
// //
// let blabber = boromir.speak;
// blabber();

// let talkBoundToBoromir = talk.bind(boromir);
//
// talkBoundToBoromir();
// talk();

//PT 3 - Prototype Basics
// In the new version of javascript there are classes. The class keyword uses Prototype under the hood.

// Prototype is just a way of saying for this object use this other object as a backup, as a delagate, as a prototype. If someone calls my object with a property that does not exist on my object, look in this other object. It's just a delegate that we assign to an object.

// fyi: we hardly ever use setProtoypeOf this is just a convulated example



// function talk(sound) {
//   console.log(sound);
// }
//
// talk('woof');

// function talk() {
//   console.log(this);
//   console.log(this.sound);
// }
// talk();
//
// const animal = {
//   talk
// };
//
// const cat = {
//   sound: 'meow!'
// };
//
// const dog = {
//   sound: 'woof!'
// };
//
// const prarieDog = {
//   howl: function() {
//     console.log(this.sound.toUpperCase());
//   }
// };
// Object.setPrototypeOf(cat, animal);
// Object.setPrototypeOf(dog, animal);
// cat.talk(); //{ sound: 'meow!' }
//             //meow!
// dog.talk(); //{ sound: 'woof!' }
//             //woof!
// Object.setPrototypeOf(prarieDog, dog);
// prarieDog.howl(); //WOOF!


//FUN FUN FUNCTION - 'new' keyword
// 1. first thing new does it create a new object, with no properties or anything its just going to create a new object.
// 2. Second order of business its going to look at what we called new on and check that objects prototype property and its going to set the prototype of the new obejct it has just created to be that object.
//3. Its going to look at what we called new on, referred to as the constructor, and its going to call that function but its going to call it with the new object it created in step 1.
//4. to return the new object it created and then setPrototypeOf and then execute the constuctor where the obejct set as this.

// function Person(saying) {
//   this.saying = saying;
// }
//
// Person.prototype.talk = function() {
//   console.log('I say', this.saying);
// };

// var crockford = new Person('whatever whatever');
// crockford.talk();


// // looking under the hood
// function spawn(constructor) {
//   //1.create a new object
//   var obj = {}
//   //2. set the prototype
//   Object.setPrototypeOf(obj, constructor.prototype)
//   //3. Execute constructor with "this"
//   // this of apply as bind but it executes the function immediatly and returns its value
//   var argsArray = Array.from(arguments);
//   console.log(argsArray.slice(1));
//
//   constructor.apply(obj,argsArray.slice(1));
//   //4.return the created object (sometimes) unless
//   return obj;
// }
//
// var crockford = spawn(Person,'wharever wharever');
// crockford.talk();
//
// //summary
// //1. create new object
// // 2. sets the prototype
// // 3. executes the constructor with "this"
// // 4. returns the created object (sometimes) unless the constructor returns an object cause then it will return that instead

//FUN FUN FUNCTION - __proto__ vs prototype

// what is proto?

// let cat = { breed: 'munchkin'};
// let myCat = { name: 'fluffykins'};
// Object.setPrototypeOf(myCat, cat);
// myCat.breed

// FIZZBUZZ question
function fizzbuzz(){
  for (var i = 0; i<= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + 'fizzbuzz');
    }else if (i % 3 === 0 ) {
      console.log(i + 'fizz') ;
    }else if (i % 5 === 0 ){
      console.log(i + 'buzz');
    } else {
      console.log(i);
    }
  }
}

console.time('fizzbuzz');
fizzbuzz();
console.timeEnd('fizzbuzz');
