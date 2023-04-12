import { createSlice } from '@reduxjs/toolkit';
import { getAllTransactions } from './statisticOperations';

const initialState = {
  trasactions: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllTransactions.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllTransactions.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trasactions = payload;
    });
    builder.addCase(getAllTransactions.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
