import React, { useEffect, useState } from 'react'
import { REST_MENU_API } from '../Constants';

const useRestaurantmenu = (id) => {
  const [restInfo, setRestInfo] = useState(null);
  const [restMenu, setRestMenu] = useState(null);
  const [restOff, setRestOff] = useState(null);
 
  useEffect(()=>{
     fetchresmenu()
  },[])
   const fetchresmenu=async()=>{
    try {
      const response = await fetch(REST_MENU_API(id));

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const data = await response.json();
     console.log(data);
      const category =
        
        data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (cat) =>
            cat?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

      setRestMenu(category);
       
      setRestInfo(
        data?.data?.cards[0]?.card?.card?.info ||
        data?.data?.cards[2]?.card?.card?.info
      );

      setRestOff(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers ||
        data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
      );
      
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };
   
  return {restInfo,restMenu,restOff}
    
}

export default useRestaurantmenu
