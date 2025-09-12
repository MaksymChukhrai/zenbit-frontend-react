import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PropertiesState, Property } from '../types';
import { propertiesAPI } from '../services/api';

// Async thunk для загрузки properties
export const fetchProperties = createAsyncThunk<Property[]>(
  'properties/fetchProperties',
  async (_, { rejectWithValue }) => {
    try {
      const response = await propertiesAPI.getAll();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch properties');
    }
  }
);

// Initial state
const initialState: PropertiesState = {
  properties: [],
  isLoading: false,
  error: null,
};

// Slice
const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.properties = action.payload;
        state.error = null;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = propertiesSlice.actions;
export default propertiesSlice.reducer;