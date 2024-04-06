import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurentList from "../utils/useRestaurentList";

// not using keys (not acceptable) <<<<< index as a key <<<<< unique id (best practice)
const Body = () => {
  // local state variable -> super powerful variable
  const {
    isLoading,
    restaurentList,
    filteredList,
    setFilteredList,
    searchText,
    setSearchText,
  } = useRestaurentList();

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>Looks like you're offline, Please check your network connection</h1>
    );

  // conditional rendering
  return isLoading ? (
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
            <Link
              key={restaurent.info.id}
              to={"/restaurent/" + restaurent.info.id}
            >
              <RestaurentCard restaurentData={restaurent} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
