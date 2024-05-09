import React from 'react';
import GroceryCatergoryCard from './GroceryCatergoryCard';

const GroceryCategory = ({ category }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {category.map((data, index) => (
        <div key={index} className="relative">
          <GroceryCatergoryCard categorydata={data} />
        </div>
      ))}
    </div>
  );
};

export default GroceryCategory;
