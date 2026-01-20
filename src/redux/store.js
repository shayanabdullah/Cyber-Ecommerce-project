import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import addressReducer from './addressSlice'
import cartReducer from './CartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    address: addressReducer, 
    cart: cartReducer, 
  },
})
