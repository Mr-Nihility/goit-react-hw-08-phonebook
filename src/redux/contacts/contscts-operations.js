import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

//-------------------------------------------------------------//

export const getUsers = createAsyncThunk('contacts/get', async () => {
  try {
    const { data } = await axios.get('/contacts');
    toast.success('done');
    return data;
  } catch (error) {
    console.log(error);
    toast.error('error');
  }
});
export const addUser = createAsyncThunk('contacts/add', async contact => {
  try {
    await axios.post('/contacts', contact);

    const { data } = await axios.get('/contacts');
    toast.success('done');
    return data;
  } catch (error) {
    console.log(error);
    toast.error('error');
  }
});

export const deleteUser = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);

    const { data } = await axios.get('/contacts');
    toast.success('done');
    return data;
  } catch (error) {
    console.log(error);
    toast.error('error');
  }
});

export const filterUser = createAction('contacts/filter');
