import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contact/add', (name, number) => ({
  payload: { newContact: { id: uuidv4(), name, number } },
}));

const removeContact = createAction('contact/remove');

const formFilter = createAction('contact/formFilter');

export { addContact, formFilter, removeContact };
