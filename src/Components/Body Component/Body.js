import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Restaurantdata from '../restaurantComponent/Restaurantdata.js';
import Maincontainer from '../restaurantComponent/Maincontainer.js';
import RestaurantMenu from '../restaurantComponent/RestaurantMenu.js';
import Header from '../LoginComponent/Header.js';
import Error from "../../utils/Error.js"
import Login from '../LoginComponent/Login.js';
import LoadingScreen from '../../utils/LoadinScreen.js';
import Cart from '../restaurantComponent/Cart.js';
import Grocerydata from '../GroceryComponent/Grocerydata.js';
import Footer from './Footer.js';
import useRestaurantmenu from '../../utils/hooks/useRestaurantmenu.js';
const Body = () => {
  useRestaurantmenu()
  const AppLayout = () => (
    <>
      <Header />
      
      <Outlet />
      <Footer/>
    </>
  );
 const About=lazy(()=>import("../AboutComponent/About.js"))
 const Contact=lazy(()=>import("../contactComponent/Contact.js"))
 const Grocery=lazy(()=>import("../GroceryComponent/Grocery.js"))
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      
      errorElement: <Error />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/restaurant',
          element: (
            <>
              <Restaurantdata />
              <Maincontainer />
            </>
          ),
        },
        {
          path: "/restaurant/:id",
          element: (
            <>
              <RestaurantMenu />
            </>
          ),
        },
        {
        path: "/Contact",
        element:(
            //Suspence is used to make react wait till our component is loading or mounting it takes fallback prop to display something eg: shimmer ui
          <Suspense fallback={<LoadingScreen />}>
                <Contact/>
            </Suspense>
        )
        },
        {
            path: "/About",
            element:(
               
              <Suspense fallback={<LoadingScreen />}>
                    <About/>
                </Suspense>
            )
            },
            {
                path: "/Grocery",
                element:(
                    
                  <Suspense fallback={<LoadingScreen />}>
                        <Grocery/>
                    </Suspense>
                )
                },
                {
                    path:"/Cart",
                    element:<Cart/>
                },
                {
                  path:"/groceryInfo/:id",
                  element:<Grocerydata/>
                }
      ],
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
};

export default Body;
