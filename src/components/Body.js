import RestaurentCard from "./RestaurentCard";
import restaurentData from "../utils/mockData";
import { useState } from "react";

// not using keys (not acceptable) <<<<< index as a key <<<<< unique id (best practice)
const Body = () => {
  const [restaurentList, setRestaurentList] = useState(restaurentData);
  return (
    <div className="body">
      <div className="top-res-btn">
        <button
          onClick={() => {
            const filteredList = restaurentList.filter(
              (restaurent) => restaurent.info.avgRating > 4
            );
            setRestaurentList(filteredList);
          }}
        >
          Top rated restaurent
        </button>
      </div>
      <div className="restaurent-container">
        {restaurentList.map((restaurent) => {
          return (
            <RestaurentCard
              key={restaurent.info.id}
              restaurentData={restaurent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
