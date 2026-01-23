import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "./authSlice";
import addressReducer from "./addressSlice";
import cartReducer from "./CartSlice";
import wishlistReducer from "./wishlistSlice";
import checkoutReducer from "./checkoutSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "checkout", "address", "wishlist"], 
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  address: addressReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist fix  
    }),
});

export const persistor = persistStore(store);
