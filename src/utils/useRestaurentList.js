import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";

const useRestaurentList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      setRestaurentList(
        //optioal chaining
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    restaurentList,
    filteredList,
    setFilteredList,
    searchText,
    setSearchText,
  };
};

export default useRestaurentList;
