import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
//-----------------------------//
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenAuth = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signIn = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log(data);
    tokenAuth.set(data.token);

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    tokenAuth.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post('/users/logout', credentials);
    tokenAuth.unset();
  } catch (error) {
    return error;
  }
});

export const getRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return rejectWithValue('oops');
    }
    tokenAuth.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
