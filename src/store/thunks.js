import { createAsyncThunk } from '@reduxjs/toolkit';
import { addUserApi, deleteContactsApi, getAllContactsApi } from 'api/contacts';

export const getContactsThunk = createAsyncThunk('getAll/contacts', () =>
  getAllContactsApi()
);
export const deleteContactsThunk = createAsyncThunk('delete/contacts', id =>
  deleteContactsApi(id)
);

export const addContactsThunk = createAsyncThunk('add/contacts', contact =>
  addUserApi(contact)
);

// export const deleteUserThunk = createAsyncThunk(
//   'tasks/deleteTask',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tasks/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
