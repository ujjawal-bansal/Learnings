const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // Tasks like DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // not it is connected to .then below
    }, 1000)
})
// Note: 	resolve(value): Call this when everything goes fine. It sends the value to .then() handler 
//          reject(error): Call this when something screws up. It sends the error to .catch() handler.

promiseOne.then(function(){
    console.log("Promise consumed");
})

//OR

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



 const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) // Mostly object is passed as the parameter in the resolve function 
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
// 🧠 Moral of the Story: .then() = success
// .catch() = failure
// .finally() = always (like your assignments — never truly optional)



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() //NOTE:  response.json() reads the response body and parses it — async job. 
//                                               It returns a Promise. You await it to get the actual data object.

//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// OR

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
// NOTE: 🔁 First .then() gets the package.
//       🪄 Second .then() opens it.
//       🍽️ Now you can eat (log/use) the data.
/* [ Client: fetch() ]
           |
           v
🛵 Order sent to restaurant (API call)
           |
           v
┌────────────────────────────┐
│    .then(response => ...)  │
└────────────────────────────┘
           |
           v
📦 Response Object arrives (sealed package)
           |
           v
┌──────────────────────────────────────┐
│     return response.json()          │
└──────────────────────────────────────┘
           |
           v
🔄 .json() reads & parses package
           |
           v
┌──────────────────────────────────────┐
│       .then(data => console.log())   │
└──────────────────────────────────────┘
           |
           v
🍱 BOOM! You finally get your food (DATA) */


// promise.all
// yes this is also available, kuch reading aap b kro.


/* IMPORTANT FOR INTERVIEW: If I send a request using fetch() and it gives 404, will it go to .catch() or .then()?
ANS: fetch() will NOT go to .catch() if the response status is 404, 500, or any HTTP error.
     It only rejects (goes to .catch) when there is a real NETWORK error (like no internet, DNS fail, CORS block etc.)
     as a response hi milega vo

/* NOTE: 	•	async makes a function return a promise.
	        •	await pauses the execution until the promise resolves (or rejects).
	        •	So your code looks synchronous, but runs asynchronously. 
            try-catch  is used if you’re using async/await with promises. you can't use if-else here*/