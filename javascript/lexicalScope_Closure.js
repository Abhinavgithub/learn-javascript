//https://www.youtube.com/watch?v=VaH09NXQZ58&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=50

//Lexical scoping

function outer(){
    let username = 'abhinav'
    function inner(){
        console.log(`inner ${username}`)
    }
    inner()
}
outer()

// Closure
function makeFunc(){
    const name = 'Mozilla'
    function displayName(){
        console.log(name)
    }
    return displayName;
}
const myFunc = makeFunc()
myFunc()