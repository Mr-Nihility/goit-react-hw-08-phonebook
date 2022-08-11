import { ADD, FILTER, DELETE } from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
//-------------------------------------------------------------//

export const addUser = createAction(ADD);

export const deleteUser = createAction(DELETE);

export const filterUser = createAction(FILTER);
