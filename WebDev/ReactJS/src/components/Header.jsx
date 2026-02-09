import { useState } from "react";
import Logo from "../Assets/img/foodvilla.png";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
