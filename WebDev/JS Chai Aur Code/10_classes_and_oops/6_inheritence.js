class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // Teacher inherits everything from the User class (because of extends).
    constructor(username, email, password){
        super(username) /* 	calls the parent class (User) constructor and sets the username.
                            super is used to call the parent’s constructor (User’s constructor).
	                        Without calling super(), JavaScript will throw an error because you must first set up the parent when extending classes.
	                        It sets this.username = username. */
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);