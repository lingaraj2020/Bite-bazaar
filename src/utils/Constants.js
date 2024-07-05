export const LOGO_URL=
"https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
export const REST_API=
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
export const CORS_API = 
"https://strange-fawn-gabardine.cyclic.app/api/proxy/swiggy/dapi/"
export const CARD_IMG_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/";
 

export const BASE_API_URL = "https://www.swiggy.com/dapi/";

export const REST_MENU_API = (restaurantId) =>
  `${BASE_API_URL}menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4529322&lng=73.86523799999999&restaurantId=${restaurantId}`;
  export const GROCERY_INFO_API = "https://www.swiggy.com/api/instamart/";