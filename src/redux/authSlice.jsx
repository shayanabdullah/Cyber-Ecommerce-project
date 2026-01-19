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
    logout: (state) => {
      state.value = null
    },
  },
})

export const { authInfo, logout} = authSlice.actions

export default authSlice.reducer