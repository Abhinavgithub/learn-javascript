//https://www.youtube.com/watch?v=u6mVHkMpoMk&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=45
// constructor
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username: ${this.username}`);
  }
}
const abhinav = new User("abhi");
abhinav.logMe();

//inheritance
class Teacher extends User {
  constructor(username, email, password, subject) {
    super(username); // invoke constructor of parent internally uses call and passes current context of this 
    this.subject = subject;
    this.email = email;
    this.password = password;
  }
  getSubject() {
    console.log(`My subject is ${this.subject}`);
  }
}
const ray = new Teacher("Ray",'ray@email.com','123' ,"Javascript");
ray.getSubject();
ray.logMe();
