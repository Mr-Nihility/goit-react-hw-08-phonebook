import { addUser, deleteUser, filterUser, getUsers } from './contscts-actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//----------------------------------------------------------------//

const itemReducer = createReducer([], {
  [getUsers.fulfilled]: (_, { payload }) => payload,
  [addUser.fulfilled]: (_, { payload }) => payload,
  [deleteUser.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [filterUser.type]: (_, { payload }) => payload,
});

const errorReducer = createReducer('', {
  [getUsers.rejected]: (_, { payload }) => payload,
  [addUser.rejected]: (_, { payload }) => payload,
  [deleteUser.rejected]: (_, { payload }) => payload,
  [getUsers.pending]: () => '',
  [addUser.pending]: () => '',
  [deleteUser.pending]: () => '',
});

const loadingReducer = createReducer(false, {
  [getUsers.pending]: () => true,
  [getUsers.fulfilled]: () => false,
  [getUsers.rejected]: () => false,
  [addUser.pending]: () => true,
  [addUser.fulfilled]: () => false,
  [addUser.rejected]: () => false,
  [deleteUser.pending]: () => true,
  [deleteUser.fulfilled]: () => false,
  [deleteUser.rejected]: () => false,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});
