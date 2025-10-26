'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  initialRole: null,
  user: false,
  role: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    initiateRole: (state, action) => {
      state.initialRole = action.payload;
    },

    createUser: (state, action) => {
        state.role = action.payload;
    },

    loginUser:(state, action) => {
        
        state.user = action.payload;
        
    },

    logoutUser:(state, action) => {
      state.user = action.payload;
      console.log('from slice',state.user)
    }
  },
});


export const {initiateRole, createUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
