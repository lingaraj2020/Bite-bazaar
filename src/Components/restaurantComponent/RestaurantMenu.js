import { Link, useParams } from 'react-router-dom';
import RestaurantMenuShimmer from '../ShimmerComponent/RestaurantMenuShimmer';
import useRestaurantmenu from '../../utils/hooks/useRestaurantmenu';
import RestaurantHeader from './RestaurantHeader';
import ResOffer from './ResOffer';
import ResCategory from './ResCategory';


const RestaurantMenu = () => {
  const { id } = useParams();
 
 const data=useRestaurantmenu(id)
  const{restInfo,restMenu,restOff}=data


  if (restInfo === null && restMenu === null && restOff === null) {
  return <RestaurantMenuShimmer />;
    }

  const linksCss =
  "lg:text-[10px] md:text-[10px] text-[8px] text-gray-400 font-bold pr-1";
  return (
    <div>
       
      <div className="lg:w-8/12 md:w-8/12 w-10/12 mx-auto lg:pt-5 md:pt-4 pt-2">
        <Link to={"/restaurant"}>
          <span className={linksCss}>Home</span>
        </Link>
        <span className={linksCss}>/</span>
        <span className={linksCss}>Hyderabad</span>
        <span className={linksCss}>/</span>
        <span className="lg:text-[10px] md:text-[10px] text-[8px] text-gray-700 font-bold pr-1">
          {restInfo?.labels?.name}
        </span>
      </div>
      <div className="h-full lg:my-4 md:my-4 my-2 lg:w-8/12 md:w-8/12 w-10/12 mx-auto">
        <RestaurantHeader restInfo={restInfo} />

        <div className="flex justify-start items-center flex-row gap-1 auto overflow-x-scroll lg:space-x-4 lg:p-4 md:space-x-4 md:p-4 space-x-2 p-2">
          {restOff.map((off) => (
            <ResOffer offdata={off} key={off?.info?.offerIds?.[0]} />
          ))}
        </div>

        {restMenu.map((cat, index) => (
          <ResCategory data={cat?.card?.card} key={index} />
        ))}

        <div className="bgc flex justify-start items-start flex-col lg:pt-6 lg:pb-32 lg:px-4 lg:py-6 md:pt-6 md:pb-32 md:px-4 md:py-6 pt-3 pb-20 px-2 bg-gray-100">
          <div>
            <span className="text-sm font-extrabold text-gray-500">
              {restInfo?.name}
            </span>
            <br></br>
            <span className="text-sm font-bold text-gray-400">
              (Outlet: {restInfo?.areaName})
            </span>
          </div>
          <span className="text-xs font-medium text-gray-400 pt-3">
            <i className="ri-map-pin-line"></i> {restInfo?.labels?.[1]?.message}
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default RestaurantMenu;
