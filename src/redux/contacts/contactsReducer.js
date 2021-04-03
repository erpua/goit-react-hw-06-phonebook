import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, formFilter } from './contactsActions';

const onAddContact = (state, action) => {
  return [...state, action.payload.newContact];
};

const onRemoveContact = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const items = createReducer([], {
  [addContact]: onAddContact,
  [removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [formFilter]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });
