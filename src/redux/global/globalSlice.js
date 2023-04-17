import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isModalLogoutOpen: false,
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
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
  },
});

export const {
  toggleIsLoading,
  toggleModalLogout,
  toggleModalAddTransaction,
  toggleModalEditTransaction,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
