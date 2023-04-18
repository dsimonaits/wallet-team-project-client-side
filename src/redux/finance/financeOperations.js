import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
// };

const BASE_URL = 'https://wallet-team-project-hg8k.onrender.com/api';

export const fetchTransactions = createAsyncThunk(
  'finance/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { ResponseBody },
      } = await axios(`${BASE_URL}/transaction/getAll`);

      return ResponseBody.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loadMoreTransactions = createAsyncThunk(
  'transactions/loadMore',
  async page => {
    const response = await fetch(`${BASE_URL}/transaction/getAll?page=${page}`);
    const data = await response.json();
    return data;
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
      return { id: _id, data };
    } catch (error) {
      toast.error('Transaction not removed');

      return rejectWithValue(error);
    }
  }
);

export const getTransactionsStatistics = createAsyncThunk(
  'finance/getTransactionsStatistics',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/transaction/statistic`,
        body
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
