import { useState } from "react";
import Logo from "../Assets/img/foodvilla.png";
import { Link } from "react-router-dom";
// Link is a component provided by react-router-dom to navigate between different routes in the application
// without reloading the page. It is used to create links in the application and 
// it is a replacement for the anchor tag in HTML.

const loggedInUser = () => {
  // API call to check authentication
  return false;
};
// SPA - A single page application is a web application that loads a single HTML page 
// and dynamically updates the content as the user interacts with the app. 
// It is built using JavaScript frameworks like React, Angular, Vue etc. 
// It provides a smooth user experience by avoiding full page reloads and only updating the necessary parts of the page. 
// In a SPA, when the user clicks on a link, instead of making a request to the server for a new page, 
// the app intercepts the click event and updates the URL using the History API, 
// and then renders the new content based on the URL. 
// This allows for faster navigation and a more seamless user experience.
// There are two types of routing in React:
// 1. Client-side routing: In client-side routing, the routing is handled on the client side using JavaScript.
// 2. Server-side routing: In server-side routing, the routing is handled on the server side

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={Logo} />
  </a>
);

// Composing components
// composing components means using one component inside another component
//* e.g. Title component is used inside Header component
// NOTE: Never create a component inside another component because 
// it will create a new instance of that component every time the parent component renders 
// which is not good for performance
// Header component is parent component and Title component is child component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
            {/* // we have used 
            // Link component to navigate between different routes in the application
            // this is a client-side routing because we are handling the routing on the client side using JavaScript */}
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
