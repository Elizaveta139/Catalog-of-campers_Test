import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66606a575425580055b3cb7d.mockapi.io';

export const fetchCampers = createAsyncThunk('adverts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const favoriteCamper = createAsyncThunk('adverts/favoritesCamper', async (id, thunkAPI) => {
  try {
    const response = await axios.put(`/adverts/${id}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// export const addContact = createAsyncThunk(
//   'adverts/addContact',
//   async ({ name, phone }, thunkAPI) => {
//     try {
//       const response = await axios.post('/adverts', { name, phone });
//       // console.log(response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'adverts/deleteContact',
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/adverts/${contactId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
