// Method 1: Using getElementById
document.getElementById('title');
document.getElementById('title').id
document.getElementById('title').class
document.getElementById('title').className
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class','test')

const title = document.getElementById('title');



// Styling through JS
title.style.backgroundColor = "lightgreen";
title.style.padding = "15px";
title.style.textAlign = "center";
title.style.borderRadius = "15px";

// To get content through js
console.log(title.textContent);
console.log(title.innerHTML);
console.log(title.innerText);
document.getElementsByClassName("heading")
document.querySelector("h2")
document.querySelector("#title")
document.querySelector(".heading")
document.querySelector('input[type="password"]')

// 
document.querySelector('ul')
const myul = document.querySelector('ul')
myul.querySelector('li')
const turnGreen= document.querySelector('li')
// styling
turnGreen.style.backgroundColor= "yellow"
turnGreen.style.padding= "15px";

// Manipulating the DOM
turnGreen.innerHTML= "five" 

// Query selector All
document.querySelectorAll('li') // --> (returns a NodeList) NodeList(3) [li,li,li]
const tempLiList= document.querySelectorAll('li') // undefined
tempLiList // NodeList(3) [li,li,li]
// NOTE: 1. People consider NodeList and HTMLCollection as arrays but these are not pure arrays.
//       2. NodeList and HTMLCollection are live collections, they are 
//          updated automatically when the DOM changes. Arrays are not live collections.
//       3. NodeList and HTMLCollection do not have the same methods as arrays. They hav
//          their own methods like item(), namedItem(), etc.
//       4. check properties first in the prototype to check which values are available..
//          In this context.. forEach() is available to us but not map() unlike pure arrays
//          where both map() and forEach() are avialable!!
// tempLiList.style.color= 'green' gives error
tempLiList[0].style.color= 'green' // 'green'
const myH1= document.querySelectorAll('h1') //undefined
// myH1.style.color= "green" // error
myH1 //NodeList [h1#title.heading]
myH1[0].style.color= 'green' // 'green'

tempLiList.forEach(function (l){
    l.style.backgroundColor='lightgreen' //over writes the previous color at line 36

})

document.getElementsByClassName('list-item') // returns HTML Collection []
const tempClassList = document.getElementsByClassName('list-item')
// we can't use forEach here.. for iterating we have to convert it into an array first
Array.from(tempClassList) // returns array
const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach(function (li){
    li.style.color= 'orange'
})
// We can use for loop too
/* NOTE: when we use querySelectorAll, we can directly use forEach(), but for map() we need to 
         convert it into array. but if we’re using getElementsByClassName, then both forEach() 
         and map() need conversion using Array.from(). /*




// 📌 querySelector vs querySelectorAll in JavaScript
// ✅ querySelector()
// - Selects the FIRST matching element based on the CSS selector.
// - Returns a single element (or null if not found).
// const heading = document.querySelector("h1"); // selects the first <h1>
// console.log(heading);

// ✅ querySelectorAll()
// - Selects ALL matching elements based on the CSS selector.
// - Returns a NodeList (which is like an array).
// - You can loop through it using forEach.

// const allHeadings = document.querySelectorAll("h2"); // selects all <h2> elements

// Loop through all h2s and apply a style
// allHeadings.forEach(function(item) {
//   item.style.color = "blue";
// });

// 🔍 Summary:
// querySelector       => returns first matching element
// querySelectorAll    => returns all matching elements (NodeList)
