import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const {
    name: resName,
    cuisines,
    costForTwoMessage,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{resName}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
