import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from '../../services/api/authApi';

const setToken = token => {
  localStorage.setItem('token', token);
};

export const register = createAsyncThunk(
  'session/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.signup(credentials);

      if (data.error) {
        throw new Error(data.error.message);
      }
      setToken(data.data.accessToken);
      return data.data;
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'session/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.login(credentials);

      if (data.error) {
        throw new Error(data.error.message);
      }

      setToken(data.data.accessToken);
      return data.data;
    } catch (error) {
      toast.error(error.message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'session/logOut',
  async (credentials, thunkAPI) => {
    try {
      await API.logout(credentials);
      setToken(null);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'session/refreshUser',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.session.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const { data } = await API.getCurrent(credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  'session/refreshToken',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await API.refreshToken();

      if (data === null) {
        await API.logout(credentials);
        setToken(null);
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
      setToken(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  refreshUser,
  refreshToken,
};

export default operations;
