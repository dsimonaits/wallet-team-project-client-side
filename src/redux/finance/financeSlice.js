import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getTransactionsStatistics,
  loadMoreTransactions,
} from './financeOperations';

// const initialState = {
//   items: [],
//   statistic: {
//     result: [],
//     transaction: [],
//   },
//   loadMoreTransactions,
// } from './financeOperations';

const initialState = {
  transactions: [],
  statistic: {
    result: [],
    transaction: [],
  },
  isLoading: false,
  currentPage: 1,
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
      .addCase(loadMoreTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = [...state.transactions, ...action.payload];
        state.currentPage += 1;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions = [...state.transactions, payload];
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        const index = state.transactions.findIndex(
          transaction => transaction._id === payload._id
        );
        state.transactions[index] = payload;
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
          loadMoreTransactions.pending,
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
          loadMoreTransactions.pending,
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
