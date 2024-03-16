export const handleFulfilledContacts = (state, { payload }) => {
  state.contacts.items = [...payload];
  state.contacts.isLoading = false;
};

export const handleDeleteFulfilled = (state, { payload }) => {
  state.contacts.items = state.contacts.items.filter(
    item => item.id !== payload.id
  );

  state.contacts.isLoading = false;
};

export const handleAddFulfilled = (state, { payload }) => {
  state.contacts.items.push(payload);
  state.contacts.isLoading = false;
};

export const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};
export const handleRejected = (state, { error }) => {
  state.contacts.error = error.message;
  state.contacts.isLoading = false;
};
