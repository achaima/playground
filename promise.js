// // PROMISES- FUNFUNFUNCTION
//
// // PROMISE is something you can pass around and you can write code around it even though you don't have the value yet.
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
//
// // example 2:
//
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
// cleanRoom()
//   .then(removeGarbage)
//   .then(winIcecream)
//   .then((result) => {
//     console.log(`finished ${result}`);
//   });//finished Cleaned the room remove Garbage won Icecream
//
// // cleanRoom().then(function(result){
// // return removeGarbage(result);
// // }).then(function(result){ return winIcecream(result);
// // }).then(function(result){console.log(`finished ${result}`);
// // }); //finished Cleaned the room remove Garbage won Icecream
//
// //All to finish
// Promise.all([cleanRoom(), removeGarbage(), winIcecream('yo')])
//   .then((each) => {
//     console.log(`all finished - ${each}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//
// //Any one of them to finish
// Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(){
//   console.log(`one of them is finished`);
// }); //one of them is finished
//
// // -----------------
//
// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hey there bud!');
//     // reject('soz bud!');
//   }, 2000);
// }).catch((err) => {
//   console.log(err);
// });
//
// somePromise.then((message) => {
//   console.log(`woah ho ${message}`);
// }, (errorMessage) => {
//   console.log(`Error: ${errorMessage}`);
// });
//
var asyncAdd= (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject(`${a} and ${b} ain't numbers honey`);
      }
    }, 1500);
  });
};

asyncAdd(5, '7').then((res) => { //2. now we put 7 as a string so initially it rejects it with aint numbers message but then for the next promise it return undefined so we'll remove the error handlebar and replace it with .catch
  console.log(`Result: ${res}`);
  return asyncAdd(res, 33); //1. here we put it as a string so it should reject - solution: 33
})
.then((res) => {
  console.log(`Should be 45 - ${res}`);
})
.catch((err) => {
  console.log(err);
});
//one error handler instead of of different error options otherwise the rejected value just moves onto the next one.

// ---------------

const request = require('request');

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);

    request({
      url: `https://map/googleapis.com/map/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (err, res, body) => {
      if (err) {
        reject('Unable to connect to google servers');
      } else if(body.status === 'ZERO_RESULTS') {
        reject('Unable to find that address');
      } else if(body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    });
  });
};


geocodeAddress('12345').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (err) => {
  console.log(err);
});
