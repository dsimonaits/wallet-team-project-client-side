import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import API from '../../services/api/authApi';

const setToken = token => {
  localStorage.setItem('token', token);
};

let showToast = false;

const upStartWarning = () => {
  setTimeout(() => {
    if (!showToast) {
      return;
    }
    showToast &&
      toast.warning(
        'Sorry for the delay. Our server is starting up after inactivity. Please wait a bit. Normally it takes a minute ',
        {
          position: 'top-right',
          autoClose: 60000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
  }, 10000);
};

export const register = createAsyncThunk(
  'session/register',
  async (credentials, thunkAPI) => {
    try {
      showToast = true;
      upStartWarning();
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
      showToast = false;
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
      upStartWarning();
      showToast = true;
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
      showToast = false;
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
      upStartWarning();
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
      upStartWarning();
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
      showToast = true;
      upStartWarning();
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
      showToast = false;
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
