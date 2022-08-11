import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

//-------------------------------------------------------------//

export const getUsers = createAsyncThunk('contacts/get', async () => {});
export const addUser = createAsyncThunk('contacts/add', async contact => {});

export const deleteUser = createAsyncThunk('contacts/delete', async id => {});

export const filterUser = createAction('contacts/filter');
