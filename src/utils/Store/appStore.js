import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";


const appStore=configureStore({
    reducer:{
        user:userSlice,
        cart:cartSlice
        
    }
})
 export default appStore