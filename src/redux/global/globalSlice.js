import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
  isModalDeleteTransactionOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    toggleModalLogout(state) {
      state.isModalLogoutOpen = !state.isModalLogoutOpen;
    },
    toggleModalAddTransaction(state) {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
    toggleModalEditTransaction(state) {
      state.isModalEditTransactionOpen = !state.isModalEditTransactionOpen;
    },
    toggleModalDeleteTransaction(state) {
      state.isModalDeleteTransactionOpen = !state.isModalDeleteTransactionOpen;
    },
  },
});

export const {
  toggleIsLoading,
  toggleModalLogout,
  toggleModalAddTransaction,
  toggleModalEditTransaction,
  toggleModalDeleteTransaction,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
