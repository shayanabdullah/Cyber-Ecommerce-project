import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authInfo: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { authInfo} = authSlice.actions

export default authSlice.reducer