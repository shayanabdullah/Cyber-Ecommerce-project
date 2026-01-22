import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import addressReducer from './addressSlice'
import cartReducer from './CartSlice'
import wishlistReducer from './wishlistSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    address: addressReducer, 
    cart: cartReducer, 
    wishlist: wishlistReducer, 
  },
})
