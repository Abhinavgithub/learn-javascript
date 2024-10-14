//https://www.youtube.com/watch?v=M0YImBHQsWU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=29

// const arr = [1, 2, 3, 4, 5];
// for(const num of arr){
//     console.log(num)
// }

// const greetings = "Hello World"
// for(const greet of greetings){
//     console.log(`Each character is ${greet}`)
// }

// const myMap = new Map()
// myMap.set('India','Bangalore');
// myMap.set('France','Paris')
// myMap.set('Germany','Berlin')

// for (const [key, value] of myMap){
//     console.log(key ,'=>' , value)
// }

//For in loops for object
// const games = {
//     'game1' : 'RDR2',
//     'game2' : 'GOW'
// }

// for (const key in games){
// console.log(key)
// console.log(games[key])
// }

//Mpas cannot be iterated using for in loops ; arrays can be iterated using for in loops

const coding = ["js","apex","java","go","cpp"]
coding.forEach( function (item){ // call back function -> function without name; Since used with array, item is added as param which stores value of each item
    //console.log(item)
})

coding.forEach( (num) => { // using arrow Function
    //console.log(num)
})

function print(num){
    // console.log(num)
}
coding.forEach(print)

coding.forEach( (num, index, arr) => { // using arrow Function
    // console.log(num , index , arr)
})

const movies = [
  {
    movie: "Dune",
    hero: "Timothy",
  },
  {
    movie: "Mission Impossible",
    hero: "Tom",
  },
  {
    movie: "The Substance",
    hero: "Demi",
  },
];

movies.forEach( (item) => {
    console.log(item.movie, item.hero);
})

