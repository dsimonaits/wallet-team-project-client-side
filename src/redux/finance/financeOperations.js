import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

token.set(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1YjRhOTI2YjJlOTllYTY5Y2E5N2YiLCJpYXQiOjE2ODE0OTYwNjQsImV4cCI6MTY4MjEwMDg2NH0.V8sPdgY93qumxRrxSRhZH_hwn6nMjXPyWpVeLg7nkU0'
);

const BASE_URL = 'https://wallet-team-project-hg8k.onrender.com/api';

export const fetchTransactions = createAsyncThunk(
  'finance/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { ResponseBody },
      } = await axios(`${BASE_URL}/transaction/getAll`, {
        // headers: {
        //   Authorization:
        //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1YjRhOTI2YjJlOTllYTY5Y2E5N2YiLCJpYXQiOjE2ODE0MTE4MjUsImV4cCI6MTY4MjAxNjYyNX0.m-RceESTfxin6DVqUcDnClQ4IQKfKUjb9hpz_-mPfs0',
        // },
      });

      return ResponseBody.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/transaction/create`,
        transaction
      );
      toast.success('Transaction added successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return data;
    } catch (error) {
      toast.error('Transaction not added', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return rejectWithValue(error);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'finance/updateTransaction',
  async ({ type, category, comment, sum, id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`${BASE_URL}/api/update/${id}`, {
        type,
        category,
        comment,
        sum,
      });

      // console.log(data);
      toast.success('Transaction updated successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return data;
    } catch (error) {
      toast.error('Transaction not updated', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return rejectWithValue(error);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `${BASE_URL}/transaction/delete/${id}`
      );
      // console.log(data);
      toast.success('Transaction successfully removed', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return data.id;
    } catch (error) {
      toast.error('Transaction not removed');

      return rejectWithValue(error);
    }
  }
);
