import React, { useEffect, useState } from 'react';
import { REST_API, CORS_API } from '../../utils/Constants';
import Card from './Card';
import ShimmerUI from '../ShimmerComponent/Shimmerui';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/hooks/useOnlineStatus';

const Maincontainer = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [filteredRestList, setFilteredRestList] = useState(null);
  const [searchTxt, setSearchTxt] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
  const onlinestatus=useOnlineStatus();
   
  const fetchData = async () => {
    try {
      const response = await fetch(REST_API + CORS_API);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();

      const resData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //console.log(resData);
      setFilteredRestList(resData);
      setRestaurantList(resData);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  if (filteredRestList == null) {
    return <ShimmerUI />;
  }
  
  if (!onlinestatus) {
    return (
      <div className="offline-message-container text-center mt-8">
        <h1 className="offline-heading text-2xl text-gray-800">
          Uh-oh! You're offline
        </h1>
        <p className="offline-text text-gray-600">
          It seems like you're not connected to the internet. Please check your
          connection and try again.
        </p>
        <p className="offline-tip text-sm text-gray-500">
          Tip: You can try refreshing the page or connecting to a different
          network.
        </p>
      </div>
    );
  }

 
  const filterBtnCss =
    'bg-transparent border-2 shadow-md border-solid border-zinc-300 px-1.5 text-xs lg:text-base lg:px-3.5 py-1 lg:py-1.5 rounded-2xl lg:rounded-3xl mr-1 lg:mr-4';

  return (
    <div className="flex justify-between items-center flex-col lg:px-16 lg:my-10 md:px-16 px-6 my-2 md:my-5 w-full">
      <span
        className="w-full text-left lg:pb-6 lg:px-12 md:pb-6 md:px-12 mt-4 font-black lg:text-2xl md:text-2xl text-xl tracking-tight"
        style={{ wordSpacing: 3.5 }}
      >
        Restaurants with online food delivery in Hyderabad
      </span>
      <div>
        <button
          className={filterBtnCss}
          onClick={() => {
            setFilteredRestList(restaurantList);
          }}
        >
          All
        </button>
        <button
          className={filterBtnCss}
          onClick={() => {
            let topRatedRestaurants = restaurantList.filter((rest) => rest.info.avgRating > 4.2);
            setFilteredRestList(topRatedRestaurants);
          }}
        >
          Top Rated
        </button>
        <button
          className={filterBtnCss}
          onClick={() => {
            let pureVeg = restaurantList.filter((rest) => rest.info.veg === true);
            setFilteredRestList(pureVeg);
          }}
        >
          Pure Veg
        </button>
        <button
          className={filterBtnCss}
          onClick={() => {
            let lessThan = restaurantList.filter((rest) => rest.info.sla.deliveryTime < 25);
            setFilteredRestList(lessThan);
          }}
        >
          Fast Delivery
        </button>
        <div className="">
          <input
            type="text"
            placeholder="Feeling Hungry?"
            className="lg:py-3 lg:pr-24 md:pr-10 lg:pl-5 rounded-3xl lg:text-sm py-1 pr-16 pl-2 border-2 border-gray-300"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          ></input>
          <button
            className="lg:py-3 lg:px-6 py-1 px-2 border-none rounded-3xl lg:text-base text-sm font-bold cursor-pointer bg-orange-400 mt-7"
            onClick={() => {
              let filterSearch = restaurantList.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredRestList(filterSearch);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {filteredRestList.length === 0 ? (
        <div className="text-center mt-4 text-gray-600">
          No matching restaurants found.
        </div>
      ) : (
        <div className="flex justify-center lg:justify-start items-center flex-wrap gap-7 my-2 px-12 mt-12">
        {filteredRestList.map((items) => (
          <div key={items.info.id}>
            <Link to={"/restaurant/" + items.info.id}>
              <Card resData={items} />
            </Link>
          </div>
        ))}
      </div>
      
      )}
    </div>
  );
};

export default Maincontainer;
