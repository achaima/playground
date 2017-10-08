//DESTRUCTURING

// Allows you to break an object or array up into variables. Handy when dealing with option objects, most commonly used for that.

// Option Objects: Objects that you pass to a function which is a single object which may or may not contain several properties.

// var animal = {
//   species: 'dog',
//   weight: 23,
//   sound: 'woof'
// };
//
//
// var { species, sound} = animal;
// console.log('The ' + species + ' says ' + sound + '!');

// makeSound ({
//   species: 'dog',
//   weight: 23,
//   sound: 'woof'
// });
//
// function makeSound(options){
//   console.log('The ' + options.species + ' says ' + options.sound + '!');
// }

//

// makeSound ({
//   weight: 23,
//   sound: 'woof'
// });
//
// function makeSound(options){
//   options.species = options.species || 'animal';
//   console.log('The ' + options.species + ' says ' + options.sound + '!');
// }

// FINAL
// makeSound({
//   weight: 23,
//   sound: 'woof'
// });
//
// function makeSound({ species = 'animal', sound}){
//   console.log('The ' + species + ' says ' + sound + '!');
// }

//ARROW FUNCTIONS

// Arrow functions are shorter. Allow us to use functions in a new way. Arrow functions encourage us make function that are the following:
//1. small
//2.inline
//3.single-purpose functions

// const dragonEvents = [
//   { type: 'attack', value: 12, target: 'player-dorkman'},
//   { type: 'yawn', value: 12},
//   { type: 'eat', target: 'horse'},
//   { type: 'attack', value: 12, target: 'player-fluffykins'},
//   { type: 'attack', value: 12, target: 'player-dorkman'}
// ];


// const totalDamageOnDorkman = dragonEvents
//   .filter(function(event){
//     return event.type === 'attack' &&
//            event.target === 'player-dorkman';
//   })
// .map(function(event){
//   return event.value;
// })
// .reduce(function(prev, value){
//   return (prev || 0) + value;
// });
// console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);
//


//FINAL

//if you have one arguement you can completely omit the parentheses so instead of .filter((event) => ...) you can do .filter(event => ...)
// const totalDamageOnDorkman = dragonEvents
//   .filter(event => event.type === 'attack')
//   .filter(event => event.target === 'player-dorkman')
//   .map(event => event.value)
//   .reduce((prev, value) => (prev || 0) + value);
// console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);


//GENERATORS
// Generator is like a pausible function

const fetch = require('node-fetch');
const co = require('co');
//
// fetch('http://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json() )
//   .then( post => post.title)
//   .then( x => console.log('Title', x));

run(function *(){
  const uri = 'http://jsonplaceholder.typicode.com/posts/1';
  const response = yield fetch(uri);
  console.log('response is', response);
  const post = yield response.json();
  const title = post.title;
  console.log('title', title);
});

function run(generator){
  const iterator = generator();
  const iteration = iterator.next();
  const promise = iteration.value;
  promise.then( x => iterator.next(x));
  console.log();
}
