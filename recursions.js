// RECURSIONS - FUNFUNFUNCTION

// Recursion is a function calls itself inside of its own body

let categories = [
  { id: 'animals', 'parent': null},
  { id: 'mammals', 'parent': 'animals'},
  { id: 'cats', 'parent': 'mammals'},
  { id: 'dogs', 'parent': 'mammals'},
  { id: 'chihuahua', 'parent': 'dogs'},
  { id: 'labrador', 'parent': 'dogs'},
  { id: 'persian', 'parent': 'cats'},
  { id: 'siamese', 'parent': 'cats'}
];

let makeTree = (categories, parent) => {

  let node = {};
  categories
  .filter(c => c.parent === parent)
  .forEach(c => node[c.id] = makeTree(categories, c.id));
  return node;
};

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2)
  );

  continued  - techsith
let total = 0;

for(let i = 1; i <= 3; i++) {
  total += i;
}

console.log(total);

let add = function(n) {
  if(n <= 0) {
    return 0;
  } else {
    return n + add(n-1);
  }
};

console.log(add(3));

// whats basically happening behind the scenes
function(3) {
  return 3 + function (2) {
    return 2 + function(1) {
      return 1 + function(0) {
        return 0;
      }
    }
  }
}
