import { createSlice } from '@reduxjs/toolkit';
import {
  handleAddFulfilled,
  handleDeleteFulfilled,
  handleFulfilledContacts,
  handlePending,
  handleRejected,
} from './handlers';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './thunks';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)
      .addCase(deleteContactsThunk.fulfilled, handleDeleteFulfilled)
      .addCase(addContactsThunk.fulfilled, handleAddFulfilled)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
