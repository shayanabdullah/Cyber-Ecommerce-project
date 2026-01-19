import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  value: [],
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    address: (state, action) => {
      state.value.push({
        ...action.payload,
        id: uuidv4(),
      });
    },
   deleteAddress: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    updateAddress: (state, action) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
    },
  },
});

export const { address, deleteAddress, updateAddress } = addressSlice.actions;

export default addressSlice.reducer;
