// CLOSURES



// Functions are also closures which means the function body has access to variables which are defined outside the function

var me = 'Bruce Wayne';
function greetMe() {
  console.log('Hello ' + me + '!');
}
me = 'Batman';
greetMe(me);


// CLOSURE - KYLE SIMPSON
function formatter(formatFn) {
  console.log(formatFn);
  return function inner(str){
    console.log(str);
    return formatFn( str );
  };
}

var lower = formatter( function formatting(v){
  console.log('v', v);
  return v.toLowerCase();
} );

var upperFirst = formatter( function formatting(v){
  return v[0].toUpperCase() + v.substr( 1 ).toLowerCase();
} );

console.log(lower('WOW'));				// wow
console.log(upperFirst( 'hello' ));		// Hello

// 
// continued FUN FUN FUNCTION
// In Javascript functions are also clousres what that means is that the function body has access to variable that is assigned outside the functions
