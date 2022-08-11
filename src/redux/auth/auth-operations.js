import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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

    tokenAuth.set(data.token);
    toast.success('done');
    return data;
  } catch (error) {
    console.log(error);
    toast.error('error');
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    tokenAuth.set(data.token);
    toast.success('done');
    return data;
  } catch (error) {
    console.log(error);
    toast.error('error');
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    tokenAuth.unset();
    toast.success('done');
  } catch (error) {
    console.log(error);
    toast.error('error');
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

    try {
      tokenAuth.set(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
      toast.error('error');
    }
  }
);
