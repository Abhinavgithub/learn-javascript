//https://www.youtube.com/watch?v=9MfwYoWKKVE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30

// const movies = [
//     {
//       movie: "Dune",
//       hero: "Timothy",
//     },
//     {
//       movie: "Mission Impossible",
//       hero: "Tom",
//     },
//     {
//       movie: "The Substance",
//       hero: "Demi",
//     },
//   ];

//   const values = movies.forEach((item) => {
//     console.log(item)
//   })

//   console.log(values); // This doesn't work forEach doesnt return values

//Filter
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) => num > 4)
//console.log(newNums)
// if using scope, then add return statment in filter
const retNums = myNums.filter( (num) => {
    return num>4
})
//console.log(retNums)

//Map
const mapNums = myNums.map((num) => num+10)
//console.log(mapNums)

//Chaninig methods
const chainNums = myNums
                .map((num)=> num*10)
                .map((num) => num +1)
                .filter((num) => num> 50)
//console.log(chainNums)

//Reduce
const total = myNums.reduce((arr,curVal) => arr+curVal, 0) // sum of array
//console.log(total)