//Arrow Function
const user = {
    username : "abhinav",
    price: 1000,
    welcome : function(){
        console.log(`${this.username}, welcome`)
    }
}

user.username = 'Ram';
user.welcome();
//console.log(this) -> returns null object in Node js env, returns window object in browser

const method = function(){
    let user = "Abhinav";
    //console.log(this);
    console.log(user);
}

const arrowMethod = () => {
    let user = "Abhinav";
    //console.log(this);
    console.log(user);
}

method();
arrowMethod();

//arrow function with params
const addTwo = (num1, num2) => {
    return num1+num2;
}
console.log(addTwo(3,4));

//arrow function with implicit return
const addThree = (num1, num2, num3) => (num1+num2+num3)
console.log(addThree(5,6,7))

// return object - to return object using implicit return add curly brackets
const obj = () => ({name : "Abhinav"})
console.log(obj())
