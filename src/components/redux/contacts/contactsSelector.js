export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.array;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorError = state => state.contacts.error;