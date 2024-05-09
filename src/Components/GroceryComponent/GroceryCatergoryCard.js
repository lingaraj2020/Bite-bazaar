import React from 'react';


const GroceryCatergoryCard = ({ categorydata }) => {
  if(!categorydata) return 
  const { image, name, price, brand } = categorydata;

  const cardContainerStyle = {
    fontFamily: 'Basis_Grotesque_Pro',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '1.5',
    color: 'rgba(2, 6, 12, 0.75)',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <img
        className="w-full h-auto rounded-md mb-4"
        src={image} 
        alt="grocery"
      />
      <div style={cardContainerStyle}>
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600">{brand}</p>
        <p className="text-lg font-semibold mt-2">Price:{price}Rs</p>
      </div>
    </div>
  );
};

export default GroceryCatergoryCard;
