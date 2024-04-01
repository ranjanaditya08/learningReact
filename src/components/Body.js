import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";

// not using keys (not acceptable) <<<<< index as a key <<<<< unique id (best practice)
const Body = () => {
  // local state variable -> super powerful variable
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();
    setRestaurentList(
      //optioal chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // conditional rendering
  return restaurentList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-btn">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredList = restaurentList.filter((restaurent) => {
              return restaurent.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredList(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="top-res-btn">
        <button
          onClick={() => {
            const filteredList = restaurentList.filter(
              (restaurent) => restaurent.info.avgRating > 4
            );
            setFilteredList(filteredList);
          }}
        >
          Top rated restaurent
        </button>
      </div>
      <div className="restaurent-container">
        {filteredList.map((restaurent) => {
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
