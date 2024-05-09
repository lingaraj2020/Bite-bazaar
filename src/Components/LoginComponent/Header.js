import React, { useEffect } from 'react';
import { LOGO_URL } from '../../utils/Constants';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from "../../utils/Store/userSlice";
import useOnlineStatus from '../../utils/hooks/useOnlineStatus';

const Header = () => {
  const user = useSelector((store) => store.user);
  const CartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onlinestatus=useOnlineStatus()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, password, displayName } = user;
        const uid = user.uid;
        dispatch(
          addUser({
            email: email,
            password: password,
            uid: uid,
            displayName: displayName,
          })
        );
        navigate('/restaurant');
      } else {
        dispatch(removeUser());
        navigate('/login');
      }
    });
  }, []);

  // const spanCsss = "pr-12 lg:pr-6 lg:text-sm xl:pr-12 xl:text-base font-bold";
  // const linkCss = "text-gray-600 hover:text-orange-300";

  return (
    <div className="bg-gray-800 text-white p-2 md:flex md:justify-between md:items-center">
      {/* Logo */}
      {user && (
        <div className="w-24 h-24 mt-1 ml-2">
          
          <img src={LOGO_URL} alt="food-hub logo" />
        </div>
      )}

      {/* Navigation links or Sign In */}
      {user ? (
        <div className="flex space-x-14 flex-row cursor-pointer">
          <span> Online Status: {onlinestatus ? "✅" : "🔴"}</span>
          <Link to="/restaurant">
            <h1 className="text-lg font-semibold hover:text-gray-400 transition duration-300">
              Home
            </h1>
          </Link>
          <Link to="/About">
            <h2 className="text-lg font-semibold hover:text-gray-400 transition duration-300">
              About
            </h2>
          </Link>
          <Link to="/Contact">
            <h3 className="text-lg font-semibold hover:text-gray-400 transition duration-300">
              Contact Us
            </h3>
          </Link>
          <Link to="/Grocery">
            <h3 className="text-lg font-semibold hover:text-gray-400 transition duration-300">
              Grocery
            </h3>
          </Link>
          <Link to="/Cart" className="text-lg font-semibold hover:text-gray-400 transition duration-30">
            <i className="ri-shopping-cart-2-line lg:text-base lg:pr-1 lg:font-semibold text-lg pr-2 font-bold"></i>
            <span className="">Cart ({CartItems.length})</span>
          </Link>
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="w-24 h-24 mt-0 ml-2 ">
            <img src={LOGO_URL} alt="food-hub logo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;