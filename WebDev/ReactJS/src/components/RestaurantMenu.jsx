import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
// useParams is a hook provided by react-router-dom to get the parameters from the url
// in restaurant menu component, we want to get the id of the restaurant from the url and display it on the page    
// for example, if the url is /restaurant/123 then we want to display the restaurant id as 123 on the page
// this is called dynamic routing because we are rendering the component according to the parameters in the url


const RestaurantMenu = () => {
    //this is how to read a dynamic url params
    const params = useParams(); 
    const {id} = params;
    // this is same as const id = params.id; 
    // we are using destructuring to get the id from the params object
    //* NOTE: we can also directly destructure the id from the useParams hook like this: const {id} = useParams();

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+ id);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.meals[0]);

    }

    if (!restaurant) {
        return <Shimmer/>;        ;
    }
    // we are using early return to render the shimmer component while the restaurant data is 
    // being fetched from the api and once the data is fetched then we are 
    // rendering the restaurant menu component with the restaurant data.
    //*NOTE: it will always be done before Object.entries because we are using restaurant data 
    // to get the ingredients from the restaurant object and 
    // if the restaurant data is not available then we will get an error 
    // while trying to access the restaurant object to get the ingredients.
    
    
    const ingredients = Object.entries(restaurant)
    .filter(([key, value]) => key.startsWith("strIngredient") && value)
    .map(([_, value]) => value);
    // had to use filter to remove the empty values from the ingredients array 
    // because the api returns some empty values for the ingredients which we don't want to display on the page
    // we are using Object.entries to convert the restaurant object into an array of key-value pairs and then we are filtering 
    // the array to get only the ingredients and then we are mapping the array to get only the values of the ingredients 
    // and storing it in the ingredients variable which is an array of ingredients.
    
    
    return (
        <div className="menu">
        <div>
            <h1>Restaurant id: {id}</h1>
            <h2>{restaurant.strMeal}</h2>
            <img src={  restaurant.strMealThumb} alt={restaurant.strMeal} />
            {/* <img src={IMG_CDN_URL+  restaurant.strMealThumb} alt={restaurant.strMeal} /> wont work
            because we are trying to concatenate the image url with the image name but the image name 
            is already a complete url so it will not work as we are using a free api not swiggy menu api. */}
            <h3>{restaurant.strCategory}</h3>
            <h3>{restaurant.strArea}</h3>
            <p>{restaurant.strInstructions}</p>
            <h3>{restaurant.strTags}</h3>
        </div>

        <div>
           <h1>Ingrediants</h1>
              <ul>
               {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
                ))}
              </ul>
         </div>
        </div>

    );
}

export default RestaurantMenu;