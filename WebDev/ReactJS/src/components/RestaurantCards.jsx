import { IMG_CDN_URL } from "../contants";


const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  // props.restaurant (not used here)
  // destructuring props object to get the values
  // this is same as const name = props.restaurant.name
  // const cuisines = props.restaurant.cuisines
  // const cloudinaryImageId = props.restaurant.cloudinaryImageId
  // const lastMileTravelString = props.restaurant.lastMileTravelString
}) => {
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL
           +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla?.slaString || "Time not available} minutes"}</h4>
    </div>
  );
};

export default RestaurantCard;