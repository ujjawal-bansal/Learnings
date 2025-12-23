// PARCEL:
// Created a server for our react app
// HMR- Hot Module Replacement- it will reload only the changed modules instead of reloading the entire app
// this is done by parcel itself
// this means that parcel will keep a track of all the files which you are updating
// File Watcher Algorithm- written in cpp.
// it is used to automatically detect when you change a file and then rebuild or reload your app.
// BUNDLING
// MINIFY
// Cleaning our code
// DEV and PROD build
// Super fast build algorithm
// Image Optimization
// Caching while development
// Compression
// Compatible with older versions of browser
// HTTPS on dev
// port Number
// Consistient Hashing algorithm
// Zero Config
// Tree Shaking- removing unwanted code



// Browserlist is used to specify which browsers you want to support. we write it in package.json file.
// e.g. "browserslist": [
//   "last 2 chrome versions",
// ]
// this means that we want to support last 2 versions of all browsers, browsers which are not dead and browsers which have more than 0.2% market share.

// npm init gives you a package.json file
// npm init -y gives you a package.json file with default values

// npm i -D parcel installs parcel as a dev dependency
// npx parcel index.html (to run the app)


import React from "react";
import ReactDOM from "react-dom/client";
// we have wrote '/client' because from react 18 onwards we have to write like this
// importing react and react-dom libraries
const heading = React.createElement(
  "h1",
  {
    id: "title", 
    key: "h1",
    // this is props..
    // props is an object which contains key value pairs
    // they can be anything like id, className, style, etc
  },
  "Heading 1"
);
// this is same as <h1 id="title">Heading 1</h1>

// React.createElement => Object => HTML(DOM)

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
    //* key is used when we have multiple similar elements
    //* react uses key to differentiate between them
    // read reconciliation in react docs for more info
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
  // children can be an array also
  // whenever there is an array, we have to provide key prop to each element 
);

// Generally, we don't use React.createElement method directly
// We use something called JSX
// Suppose I have to build a big structure with many nested elements
// It will be very tedious to write React.createElement method again and again
// So, we use JSX which is a syntax extension to javascript
// It is not necessary to use JSX but it is recommended to use it
// It makes our code easier to write and understand
// JSX gets converted to React.createElement method calls by babel

console.log(heading);


// JSX uses React.createElement method behind the scenes => Object => HTML(DOM) 
// babel is a javascript compiler which converts JSX to React.createElement method calls
// babel is used to convert modern javascript code to older javascript code which can run in older browsers
// babel is also used to convert JSX to React.createElement method calls
const heading3= (
<h1 id="title" key="h2" >
Namaste React
</h1>
);

// this or JSX is not html
// JSX is a html like syntax but it is not html inside javascript





const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(container);