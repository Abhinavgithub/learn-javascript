//https://www.youtube.com/watch?v=-owpuf4lbyU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=44

function setUserName(username) {
  //complex logic
  this.username = username;
}
function createUser(username, email, password) {
  setUserName.call(this, username); // execution context destroys all the variables post function processing, pass this so that context of the variable remains using call method
  this.email = email;
  this.password = password;
}
const user = new createUser("abhinav", "abhinav@email.com", "123");
console.log(user);
