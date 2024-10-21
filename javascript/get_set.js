//https://www.youtube.com/watch?v=t6vLhF-iSxQ&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=48
class user {
    constructor(username, email){
        this.email = email
        this.username = username
    }

    get username(){
        return this._username
    }
    set username(value){
        this._username = value
    }
    get email(){
        return `${this._email}@company.com`
    }
    set email(value){
        this._email = value
    }
}

const abhinav = new user("Abhinav","abc")
console.log(abhinav.username)
console.log(abhinav.email)