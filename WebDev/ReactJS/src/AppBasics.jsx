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


//75import React from "react"; //not needed in react 17 and onwards if we are using only jsx
import ReactDOM from "react-dom/client";
// we have wrote '/client' because from react 18 onwards we have to write like this
// importing react and react-dom libraries

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title", 
//     key: "h1",
//     // this is props..
//     // props is an object which contains key value pairs
//     // they can be anything like id, className, style, etc
//     //* key is used when we have multiple similar elements
//     //* react uses key to differentiate between them
//     //* read reconciliation in react docs for more info
//   },
//   "Heading 1"
// );
// // this is same as <h1 id="title">Heading 1</h1>


// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//     key: "h2",
   
//   },
//   "Heading 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
//   // children can be an array also
//   // whenever there is an array, we have to provide key prop to each element 
// );
// we won't be writing code like this in real world applications.

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
// JSX => React.createElement => Object => HTML(DOM)

const heading3= (
<h1 id="title" key="h2" >
Namaste React
</h1>
);
// this is same as above heading element where we used React.createElement method.


// <h1.. here is a html like syntax called JSx expression.
// but it is not html
// it is jsx
// because html cannot be written inside javascript directly
// so, we use jsx which looks like html but it is not html
// JSX is a html like syntax but it is not html inside javascript

// Ract Component
// -functional Component - NEW way
// a function which returns a react element is called a functional component
// name of the component should start with a capital letter
// this is a convention


const HeaderComponent = () => {
  return (<div>
    {heading3}
      <h1>
      Header Component
      </h1>
      <h2>
        this is h2 tag
      </h2>
        </div>);

        // we use () when writing multi line jsx.. no need when single line jsx.
        // return is also not mandatory as arrow function with single statement (jsx) returns the value by default
        // most of the times we write like this only in real world applications
}




const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
//root.render(container);

// wehn i am supposed to render react component:
root.render(<HeaderComponent />); 
// we use self closing tag when there is no child for that component

//* NOTE: in order to use a normal  variable inside jsx, we have to use {} curly braces
// e.g. const name = "John";
// <h1>Hello {name}</h1> 
// this will render Hello John
//* if we have to use react component inside another functional component
//* this is called component composition
// e.g. const HeaderComponent = () => {
// return (
// <div>
// <h1>Header Component</h1>
// <AnotherComponent /> or {Another Component()}
// </div>
// );
//* you can write any javascript expression inside {} curly braces in jsx.
