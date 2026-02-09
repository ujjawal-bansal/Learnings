import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  // 8 restraunt list = > filtered  rest with "King"
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  
  //* useState is a hook which is used to create local state variable in functional component
  //* Therefore, never use/create useState outside a functional component because 
  // it will break the rules of hooks and cause bugs in your application
    // it returns an array with two elements: the current state and a function to update the state
    // syntax: const [state, setState] = useState(initialState)
  //* NOTE: Never write useState inside a loop, condition or nested function because 
  //* it will break the rules of hooks and cause bugs in your application  
  
  // useEffect is a hook which is used to perform side effects in functional components
  // it takes two arguments: a function and a dependency array
  // the function is called after the component is rendered
  // the dependency array is used to specify when the function should be called
  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  // if we do not pass dependency array, the function will be called after every render (not recommended)
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  console.log("render");

  // not render component (Early return)
  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0 )
    return <h1>No Restraunt match your Filter!!</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            //always add key when you use map
        // ... is called Spread Operator
       // It opens (spreads) all key-value pairs of an object

       // {...object}
       // means: object ke andar jo bhi hai, sab alag-alag props bana do 
       // Example:
       // const obj = { id: 1, name: "KFC", rating: 4.2 }

       // <RestrauntCard {...obj} />

       // is same as writing:
       // <RestrauntCard id={1} name="KFC" rating={4.2} />

       // So spread operator = shortcut for sending multiple props at once

       // Without spread:
       // <RestrauntCard data={obj} />
       // Then inside: props.data.id, props.data.name

       // With spread:
       // <RestrauntCard {...obj} />
       // Then inside: props.id, props.name

       // One line rule:
       // ...object → object ke andar ka sab kuch bahar nikaal do as props

       //* Reconciliation: the algorithm react uses to diff one tree with another to determine which parts need to be changed
       // virtual dom is a lightweight copy of the real DOM
       // when we update the state of a component, react creates a new virtual dom
       // then it compares the new virtual dom with the old virtual dom
       // and finds out the differences
       // then it updates only those parts in the real DOM which are changed
       // this process is called reconciliation
       //* react uses reconciliation algorithm to update the real DOM efficiently 
       //* it is a diff algorithm that finds out the difference between two trees.
       // a tree is a virtual representation of the DOM
       //* it will only re-render the specific portion of the app which is found by the diff algorithm
       //* NOTE: no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)

          );
          // props- properties
          //whenever i say i am passing some props to a component, it means i am passing some data to that component like this
          // here, restaurant is the prop being passed to RestrauntCard component
          // in RestrauntCard component, we can access this prop using props.restaurant


        })}
      </div>
    </>
  );
};

export default Body;
