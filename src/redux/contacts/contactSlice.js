import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    isDeleting: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, state => {
        state.isDeleting = true;
      })
      .addCase(editContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isDeleting = false;
        state.error = payload;
      })
      .addCase(editContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = false;
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isDeleting = false;
        state.error = false;
        const index = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const editTodoIndex = state.contacts.findIndex(
          contact => contact.id === payload.id
        );
        if (editTodoIndex !== -1) {
          state.contacts[editTodoIndex] = payload;
        }
      });
  },
});

export const contactsReducer = contactSlice.reducer;
