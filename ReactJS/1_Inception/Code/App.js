// PARCEL:
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





import React from "react";
import ReactDOM from "react-dom/client";
// we have wrotes /client because from react 18 onwards we have to write like this
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

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
    // key is used when we have multiple similar elements
    // react uses key to differentiate between them
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
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(container);