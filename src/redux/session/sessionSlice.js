import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  refreshToken,
} from './sessionOperations';

const initialState = {
  user: { name: null, email: null, balance: 0, createdAt: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    updateBalance(state, action) {
      state.user.balance = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(
        register.fulfilled,
        (
          state,
          { payload: { name, accessToken, email, balance, createdAt } }
        ) => {
          state.user.name = name;
          state.user.email = email;
          state.token = accessToken;
          state.user.balance = balance;
          state.isLoggedIn = true;
          state.user.createdAt = createdAt;
        }
      )
      .addCase(
        logIn.fulfilled,
        (
          state,
          { payload: { name, accessToken, email, balance, createdAt } }
        ) => {
          state.user.name = name;
          state.user.email = email;
          state.token = accessToken;
          state.user.balance = balance;
          state.isLoggedIn = true;
          state.user.createdAt = createdAt;
        }
      )
      .addCase(logOut.fulfilled, state => {
        state.user = { name: '', email: '', balance: '' };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(
        refreshUser.fulfilled,
        (state, { payload: { name, balance, email, createdAt } }) => {
          state.user.name = name;
          state.user.email = email;
          state.user.balance = balance;
          state.user.createdAt = createdAt;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        refreshToken.fulfilled,
        (state, { payload: { name, balance, email, createdAt } }) => {
          state.user.name = name;
          state.user.email = email;
          state.user.balance = balance;
          state.user.createdAt = createdAt;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.pending,
          logIn.pending,
          logOut.pending,
          refreshUser.pending,
          refreshToken.pending
        ),
        state => {
          state.isRefreshing = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          logIn.fulfilled,
          logOut.fulfilled,
          refreshToken.fulfilled,
          refreshUser.fulfilled
        ),
        state => {
          state.isRefreshing = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          logIn.rejected,
          logOut.rejected,
          refreshUser.rejected,
          refreshToken.rejected
        ),
        (state, { payload }) => {
          state.isRefreshing = false;
          state.error = payload;
          state.user = { name: '', email: '', balance: '' };
          state.token = null;
          state.isLoggedIn = false;
        }
      ),
});

export const { updateBalance } = sessionSlice.actions;

export const sessionReducer = sessionSlice.reducer;
