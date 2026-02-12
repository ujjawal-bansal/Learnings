import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "../index.css";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

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
      
      {/* // about page should be rendered here when we click on about link */}
      {/* // if path is /about then about component should be rendered here */}
      {/*<About /> 
       <Body />
      <ContactUs/> */}
      {/* // but instead of all this, we will use outlet to render the child routes of app layout
      // because we want to render about and contact us page inside the same layout when we click on their links */}
      {/* // I want my headeer and footer to be same on all pages and 
      // only the body/outlet should change when i click on different links
      // we have to import Outlet from react-router-dom to render the child routes of app layout */}
      {/* // whenever we are supposed to render some components according to our routing, so
      // wherever we need to do dynamic or conditional routing, we will use <Outlet /> component from react-router-dom
      // it will render the child routes of app layout according to the path in the url */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    // errorElement is used to render a component when there is an error in the route
    children: [ 
      
      {path: "/", 
      element: <Body />},
      
      {path: "/about", 
      element: <About />,},
    
      { path: "/contact",
      element: <ContactUs />,} ,

      {
        path: "/restaurant/:id",
        //here :id is a dynamic parameter which will be replaced by the actual id of the restaurant in the url
        // it can take any value and we can access that value in the restaurant menu component 
        // using useParams hook from react-router-dom
        element: <RestaurantMenu />,
      }
    ]
    // now about is the child route of app layout 
    //* all the children routes will be rendered inside the outlet of app layout

  },
  // { path: "/about", element: <About /> },
  // but we want about page to be rendered inside the same page layout (AppLayout) when we click on about link
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
// RouterProvider is used to provide the router to the application
// it is a component provided by react-router-dom to wrap the application with the router
// it takes the router as a prop and provides the routing context to the application
// we have wrote router={appRouter} because we have created the router using createBrowserRouter 
// and stored it in appRouter variable