export const handleFulfilledContacts = (state, { payload }) => {
  state.contacts.contacts.items = payload;
  state.contacts.contacts.isLoading = false;
};
