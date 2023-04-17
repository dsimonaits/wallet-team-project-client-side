import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

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
      const {
        data: { ResponseBody },
      } = await axios.post(`${BASE_URL}/transaction/create`, transaction);
      toast.success('Transaction added successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      return ResponseBody.data;
    } catch (error) {
      toast.error('Transaction not added', {
        position: 'top-right',
        autoClose: 3000,
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
  async ({ type, category, comment, sum, _id }, { rejectWithValue }) => {
    try {
      const {
        data: { ResponseBody },
      } = await axios.put(`${BASE_URL}/api/update`, {
        type,
        category,
        comment,
        sum,
        _id,
      });

      toast.success('Transaction updated successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return ResponseBody.data;
    } catch (error) {
      toast.error('Transaction not updated', {
        position: 'top-right',
        autoClose: 3000,
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
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/transaction/delete`, {
        data: {
          _id: _id,
        },
      });
      // console.log(data);
      toast.success('Transaction successfully removed', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      console.log({ _id }, data);
      return _id;
    } catch (error) {
      toast.error('Transaction not removed');

      return rejectWithValue(error);
    }
  }
);
