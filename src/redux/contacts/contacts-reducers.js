import { addUser, deleteUser, filterUser } from './contscts-actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//----------------------------------------------------------------//
const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemReducer = createReducer(initContacts, {
  [addUser.type]: (state, { payload }) => [...state, payload],
  [deleteUser.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterUser.type]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
