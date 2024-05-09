import React from 'react';
import { Link } from 'react-router-dom'; 
import Grocerycard from './Grocerycard';

const Grocerycomp = (props) => {
  const { groceryTitle, groceryList } = props;

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {groceryTitle?.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-3 ">
        {groceryList.map((item, index) => (
          <div key={index}>
             <Link to={`/groceryInfo/${item.displayName}`}>
              <Grocerycard groceryData={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocerycomp;
