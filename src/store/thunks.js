import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllContactsApi } from 'api/contacts';

export const getContactsThunk = createAsyncThunk('getAll/contacts', () =>
  getAllContactsApi()
);
