import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, favoriteCamper } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(favoriteCamper.pending, handlePending)
      .addCase(favoriteCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedFavoriteCamper = state.items.map(camper =>
          camper._id === action.payload._id ? action.payload : camper
        );
        state.items = updatedFavoriteCamper;
      })
      .addCase(favoriteCamper.rejected, handleRejected);
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const catalogReducer = slice.reducer;
