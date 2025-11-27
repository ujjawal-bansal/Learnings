const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // Not necessary but good practice.. write verbose code.
}

const userOne = new User("hitesh", 12, true) /* here new is a constructor function.. 
                                                it allows you to make multiple instances from a single object literal 
                                                it use used to make a new context */
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

/*
- If you don't use "new" while calling constructor function, "this" points to the global object.
- Global object will get polluted with unwanted properties like username, loginCount.
- Always use "new" with constructor functions to create separate new objects.
- "return this" is optional when using "new" because JavaScript automatically returns the new object. */

/* 🔥 What happens when you use the new keyword?

Four important steps:
	1.	A new empty object {} is automatically created.
	2.	Constructor function is called, and all arguments you pass are given to it.
	3.	this inside the constructor gets linked to the new object and properties/methods are added to it.
	4.	The object is automatically returned by JavaScript.

✅ These 4 steps happen every time you use new. 

⸻
🛠 Why do we use this inside constructors?
	•	this refers to the current object being created.
	•	Without this, properties and methods won’t be attached to the new object.
	•	Example: this.username = username attaches username to the newly created object.

⸻

⚡ Adding Methods inside Constructor:
	•	You can also create methods inside the constructor using this.methodName = function(){}.
	•	Example: this.greeting = function(){ console.log('Welcome ' + this.username); }
	•	Methods also get attached to the new object.

⸻

🏗 What is .constructor Property?
	•	Every object created with a constructor function has a hidden .constructor property.
	•	.constructor refers back to the function that created the object.
	•	Example: userOne.constructor will refer to the User function.

⸻

🔍 Checking Instances:
	•	You can use the instanceof operator to check if an object was created by a particular constructor.
	•	Example: userOne instanceof User returns true.
*/

