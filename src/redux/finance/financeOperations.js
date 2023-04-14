import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

token.set(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1YjRhOTI2YjJlOTllYTY5Y2E5N2YiLCJpYXQiOjE2ODE0MTE4MjUsImV4cCI6MTY4MjAxNjYyNX0.m-RceESTfxin6DVqUcDnClQ4IQKfKUjb9hpz_-mPfs0'
);

const BASE_URL = 'https://wallet-team-project-hg8k.onrender.com/api';

export const fetchTransactions = createAsyncThunk(
  'finance/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${BASE_URL}/transaction/getAll`);
      return data.ResponseBody.data;
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
      console.log(`Transaction added successfully`);

      return data;
    } catch (error) {
      console.log(` Transaction not added`);
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

      console.log(data);
      console.log(`Transaction updated successfully`);
      return data;
    } catch (error) {
      console.log(`Transaction not updated`);
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
      console.log(`Transaction successfully removed`);
      return data.id;
    } catch (error) {
      console.log(`Transaction not removed`);
      return rejectWithValue(error);
    }
  }
);
