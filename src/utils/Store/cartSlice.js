import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], 
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    clearItems: (state, action) => {
      state.items = []; 
    },
  },
});

export const { addItems, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
