import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "../index.css";

/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

// React.Fragment: Used to wrap multiple elements without adding extra node to the DOM
// it is important because in react, a component should return a single element
// as jsx has only one single parent element
// we can use div or any other element but it will add extra node to the DOM
// to avoid that, we use React.Fragment or shorthand syntax <>
// It is also used to group a list of children without adding extra nodes to the DOM
// e.g. const jsx = (
//   <>
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//   </>
// );

// to apply styling we can:
// e.g. const jsx = (
//   <div style={{ backgroundColor: "lightblue" }}>
// {{}} is used because first {} is for embedding javascript expression in jsx
// in react we apply styling using javascript object
// you can also define the style object separately and then use it by its name.
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//   </div>
// );
// OR
// we can use className attribute to apply css classes
// e.g. const jsx = (
//   <div className="container">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//   </div>
// );
// another way is to use talwind css framework

// .join in javascript is used to join the elements of an array into a string
// syntax: array.join(separator)



//Config Driven UI: Data is represented in the form of JS objects/JSON






const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);