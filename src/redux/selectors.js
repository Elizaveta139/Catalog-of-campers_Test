// import { createSelector } from '@reduxjs/toolkit';

export const selectCatalogs = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectFilter = state => state.filters;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.name.toLowerCase())
//     );
//   }
// );
