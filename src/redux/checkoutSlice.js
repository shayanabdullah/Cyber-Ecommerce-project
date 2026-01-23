import { createSlice } from "@reduxjs/toolkit";


// checkoutSlice.js
const initialState = {
  subtotal: 0,
  tax: 0,
  shipping: 0,
  discount: 0,
  total: 0,
  coupon: null,
};



const checkOutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers : {
     setCheckoutSummary(state, action) {
  return { ...state, ...action.payload };

}
    }
})

export const { setCheckoutSummary} = checkOutSlice.actions

export default checkOutSlice.reducer