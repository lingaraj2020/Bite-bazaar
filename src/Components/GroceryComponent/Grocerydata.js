import React, { useEffect, useState } from 'react';
import GroceryCategory from './GroceryCategory';
import { useParams } from 'react-router-dom';
import ShimmerCard from '../ShimmerComponent/Shimmercard';

const Grocerydata = () => {
  const [groceryList, setGroceryList] = useState([]);
  console.log(groceryList);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const formattedId = id.replace(/\s/g, '+');
      const url = `https://www.swiggy.com/instamart/category-listing?categoryName=${formattedId}&custom_back=true&taxonomyType=All+Listing`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const html = await response.text();

      // Find the JSON-LD script tag
      const jsonLD = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
      
      if (!jsonLD) {
        throw new Error('No JSON-LD script tag found');
      }
       // convert into js object
      const jsonData = JSON.parse(jsonLD[1]);
      const productList = jsonData.itemListElement ? jsonData.itemListElement.map(item => ({
        name: item.name,
        image: item.image[0], 
        brand: item.name.split('(')[0].trim(), 
        price: item.offers.price,
      })) : [];
     setGroceryList(productList);
    } catch (error) {
      console.error('Error fetching grocery data:', error.message);
      
    }
  };
  if (groceryList === null || groceryList === undefined) {
    return <ShimmerCard />;
  }

  return (
    <div>
      <GroceryCategory category={groceryList} />
    </div>
  );
};

export default Grocerydata;
