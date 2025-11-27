// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){ // givng power to array
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


/* 🧠 What is Object.prototype?

✅ It’s the parent of all JavaScript objects.
✅ When you do heroPower.hitesh(), JavaScript can’t find hitesh directly inside heroPower,
so it climbs up the Prototype Chain and finds it inside Object.prototype.

✅ Same for myHeros, even though it’s an array:
	•	Arrays internally are objects too.
	•	They also have access to Object.prototype methods. */


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // old syntax
}

Teacher.__proto__ = User // old syntax

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

/* 
- Object.setPrototypeOf(child, parent) manually sets parent as the prototype of child.
- After this, if the child object doesn't have a property, JavaScript will look for it in the parent object.
- TeachingSupport.isAvailable comes from TeachingSupport itself.
- TeachingSupport.makeVideo comes from Teacher through prototype chain.
- Prototype chain: TeachingSupport -> Teacher -> Object.prototype */