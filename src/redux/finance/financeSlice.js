import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getTransactionsStatistics,
} from './financeOperations';

const initialState = {
  transactions: [],
  statistic: null,
  isLoading: false,
  error: null,
};

const financeSLice = createSlice({
  name: 'finance',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [payload, ...state.transactions];
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        const newTransactions = state.transactions.map(item => {
          if (item._id === payload._id) {
            return payload;
          }
          return item;
        });
        state.transactions = newTransactions;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.filter(
          transaction => transaction._id !== payload.id
        );
      })
      .addCase(getTransactionsStatistics.fulfilled, (state, { payload }) => {
        state.statistic = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchTransactions.pending,
          deleteTransaction.pending,
          addTransaction.pending,
          updateTransaction.pending,
          getTransactionsStatistics.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactions.fulfilled,
          deleteTransaction.fulfilled,
          addTransaction.fulfilled,
          updateTransaction.fulfilled,
          getTransactionsStatistics.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchTransactions.rejected,
          deleteTransaction.rejected,
          addTransaction.rejected,
          updateTransaction.rejected,
          getTransactionsStatistics.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const financeReducer = financeSLice.reducer;
