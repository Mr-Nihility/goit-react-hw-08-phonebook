import { createSlice } from '@reduxjs/toolkit';
import { signIn, logIn, logOut, getRefresh } from './auth-operations';
//-----------------------------------------------------//
const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLogin: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
      state.isLogin = true;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.token = '';
      state.user = { name: '', email: '' };
      state.isLogin = false;
    },
    [getRefresh.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isLogin = true;
    },
  },
});

export default authSlice.reducer;
