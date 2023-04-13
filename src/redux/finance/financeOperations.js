import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://wallet-team-project-hg8k.onrender.com/api';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { ResponseBody },
      } = await axios(`${BASE_URL}/transaction/getAll`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1YjRhOTI2YjJlOTllYTY5Y2E5N2YiLCJpYXQiOjE2ODE0MTE4MjUsImV4cCI6MTY4MjAxNjYyNX0.m-RceESTfxin6DVqUcDnClQ4IQKfKUjb9hpz_-mPfs0',
        },
      });

      return ResponseBody.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
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
  'transactions/updateTransaction',
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
  'transactions/deleteTransaction',
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
