import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from '../../services/api/authApi';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
const register = createAsyncThunk(
  'user/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.signup(credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
const logIn = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await API.login(credentials);
    // After successful login, add the token to the HTTP header
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await API.logout;
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    toast.error('Something went wrong! Please, try again');
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
const refreshUser = createAsyncThunk('user/current', async (_, thunkAPI) => {
  // Reading the token from the state via getState()
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    // If there is no token, exit without performing any request
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    // If there is a token, add it to the HTTP header and perform the request
    setAuthHeader(persistedToken);
    const { data } = await API.fetchCurrentUser();
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const operations = {
  register,
  logIn,
  logOut,
  refreshUser,
};

export default operations;
