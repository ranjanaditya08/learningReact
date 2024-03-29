import { IMG_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const {
    restaurentData: {
      info: {
        cloudinaryImageId,
        name,
        cuisines,
        locality,
        avgRating,
        sla: { deliveryTime },
      },
    },
  } = props;
  return (
    <div className="res-container">
      <img src={`${IMG_URL}${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
