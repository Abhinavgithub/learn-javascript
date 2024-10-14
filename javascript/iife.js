// Immediately Invoke Function Expression
// https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24
// To remove global scope pollution

//named IIFE
(function test(){
    console.log(`IIFE executed`);
})();

// using arrow method
(() => {
    console.log(`2nd IIFE executed`);
})();

// with params
((name) => {
    console.log(`2nd IIFE executed ${name}`);
})('Abhinav')

// add semicolon to stop execution when using 2 IIFEs