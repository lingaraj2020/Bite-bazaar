import React, { useEffect, useState } from 'react';
import Grocerycomp from './Grocerycomp';
import ShimmerUI from '../ShimmerComponent/Shimmerui';

const Grocery = () => {
  const [grocerylist, setGroceryList] = useState();
  const [grocerytitle, setGroceryTitle] = useState();


  useEffect(() => {
    fetchGroceryData();
  }, []);

  const fetchGroceryData = async () => {
    try {
      const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fapi%2Finstamart%2Fhome%3FpageNo%3D2%26layoutId%3D3173%26storeId%3D1383574%26clientId%3DINSTAMART-APP");
      const json = await data.json();
      //console.log(json);
      setGroceryList(json?.data?.widgets?.[0]?.data);
      setGroceryTitle(json?.data?.widgets?.[0]?.widgetInfo);
      
    } catch (error) {
      console.error('Error fetching grocery data:', error);
    }
  };

  if (grocerylist === null || grocerylist === undefined) {
    return <ShimmerUI />;
  }

  return (
    <div>
      <Grocerycomp groceryTitle={grocerytitle} groceryList={grocerylist} />
    </div>
  );
};

export default Grocery;
