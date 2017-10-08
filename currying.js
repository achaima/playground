// CURRYING

// The idea with currying is that your function can pass through the application and gradually receive the agruements it needs.


// Not curried function
let dragon = (name, size, element) =>
name + ' is a ' +
size + ' dragon that breathes ' +
element + '!';

console.log(dragon('fluffykinfs', 'tiny', 'lightening'));



let dragon =
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!';

console.log(dragon('fluffykins')('tiny')('lightening'));

let fluffykinDragons = dragon('fluffykins');

console.log(fluffykinDragons('tiny')('lightening'));


let dragons = [
  { name: 'fluffykins', element: 'lightening'},
  { name: 'noomi', element: 'lightening'},
  { name: 'karo', element: 'fire'},
  { name: 'doomer', element: 'timewarp'}
];

let hasElement =
  (element, obj) => obj.element === element;

let lightingDragons =
    dragons.filter(x => hasElement('lightening', x));

console.log(lightingDragons);
