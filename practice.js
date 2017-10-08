function nameList() {
  var names = ['Ben', 'Jafar', 'Matt', 'Priya', 'Brian'];
  var printNames = names.forEach((name)=> console.log(name));

  printNames;
}

nameList();


var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': []
  },
  {
    'id': 654356453,
    'title': 'Bad Boys',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }]
  },
  {
    'id': 65432445,
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': []
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id: 432534, time: 65876586 }]
  }
];

// function addVideoId(releases){
//   var newArr = [];
//   releases.forEach((film) => {
//     newArr.push({id: film.id, title: film.title});
//   });
//   console.log(newArr);
//   return newArr;
// }
//
// addVideoId(newReleases);

// function map(releases) {
//   return releases.map((film) => {
//     return {id: film.id, title: film.title};
//   });
// }
//
// map(newReleases);
// console.log(map(newReleases));

// function filter(releases){
//   return releases.map((film) => {
//     if (film['id'] && film['title'])
//       return film;
//   });
// }
//
// filter(newReleases);
// console.log(filter(newReleases));

//
// function overFive(releases){
//   return releases
//   .filter((film) => {
//     return film.rating >= 5;
//   })
//   .map((film) => {
//     return film.id;
//   });
// }
//
// overFive(newReleases);
// console.log(overFive(newReleases));

var movieLists = [
  {
    name: 'New Releases',
    videos: [
      {
        'id': 70111470,
        'title': 'Die Hard',
        'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
        'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 4.0,
        'bookmark': []
      },
      {
        'id': 654356453,
        'title': 'Bad Boys',
        'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
        'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 5.0,
        'bookmark': [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: 'Dramas',
    videos: [
      {
        'id': 65432445,
        'title': 'The Chamber',
        'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
        'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 4.0,
        'bookmark': []
      },
      {
        'id': 675465,
        'title': 'Fracture',
        'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
        'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 5.0,
        'bookmark': [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];

function flatten(movieList) {
  var flat =  movieList
  .map((category) => {
    return category.videos
    .map((film) => {
      return film.id;
    });
  });
  var flattened = [].concat(...flat);
  return flattened;
}


// console.log(flatten(movieLists));


var movieLists = [
  {
    name: 'Instant Queue',
    videos: [
      {
        'id': 70111470,
        'title': 'Die Hard',
        'boxarts': [
							{ width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
							{ width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg' }
        ],
        'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 4.0,
        'bookmark': []
      },
      {
        'id': 654356453,
        'title': 'Bad Boys',
        'boxarts': [
							{ width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg' },
							{ width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' }

        ],
        'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 5.0,
        'bookmark': [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: 'New Releases',
    videos: [
      {
        'id': 65432445,
        'title': 'The Chamber',
        'boxarts': [
							{ width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
							{ width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg' }
        ],
        'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 4.0,
        'bookmark': []
      },
      {
        'id': 675465,
        'title': 'Fracture',
        'boxarts': [
							{ width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg' },
							{ width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' },
							{ width: 300, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' }
        ],
        'url': 'http://api.netflix.com/catalog/titles/movies/70111470',
        'rating': 5.0,
        'bookmark': [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];


var arr = [1,2,3,4,5,6];

var blah = arr.map(num => {
  return num * 2;
});

var red = arr.reduce((sum, current) => {
  return sum += current;
});


console.log(red);
console.log(blah, 'blah');














//
// function letsGo(movieList){
//   var map =  movieList.map((category) => {
//     return category.videos.map((video) => {
//       return video.boxarts.filter((each) => {
//         return each.width === 150;
//       })
//       .map((boxart) => {
//         var fo = {id: video.id, title: video.title, boxart: boxart.url};
//         return fo;
//       });
//     });
//   });
//   var myNewArray = [].concat(...map).reduce((prev,curr) => {
//     return prev + curr;
//   });
//   return myNewArray;
// }
//
// console.log(letsGo(movieLists));
