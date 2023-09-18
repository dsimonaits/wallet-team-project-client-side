import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from 'services/api/api';

export const fetchTransactions = createAsyncThunk(
  'finance/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api(`/api/transaction/getAll`);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMoreTransactions = createAsyncThunk(
  'transactions/loadMore',
  async page => {
    const response = await api(`/api/transaction/getAll?page=${page}`);
    const data = await response.json();
    return data;
  }
);

export const addTransaction = createAsyncThunk(
  'finance/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await api.post(`/api/transaction/create`, transaction);
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

      return data.data;
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

      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'finance/updateTransaction',
  async ({ type, category, date, comment, sum, id }, { rejectWithValue }) => {
    try {
      const { data } = await api.put(`/api/transaction/update/${id}`, {
        type,
        date,
        category,
        comment,
        sum,
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
      return data.data;
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

      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'finance/deleteTransaction',
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await api.delete(`/api/transaction/delete`, {
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

      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionsStatistics = createAsyncThunk(
  'finance/getTransactionsStatistics',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await api.post(`/api/transaction/statistic`, body);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
