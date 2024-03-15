export const handleFulfilledContacts = (state, { payload }) => {
  state.contacts.items = [...payload];
  state.contacts.isLoading = false;
  console.log(state.contacts.isLoading);
};

export const handlePending = state => {
  state.contacts.isLoading = true;
  console.log(state.contacts.isLoading);
  state.contacts.error = '';
};
export const handleRejected = (state, { error }) => {
  state.contacts.error = error.message;
  state.contacts.isLoading = false;
};
