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
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNldHdnYXd3dzEyQHNkZi5jb20iLCJfaWQiOiI2NDNhZDE5YWFlYTRhMjg0Y2JjZjNiZTAiLCJpc0FjdGl2YXRlZCI6ZmFsc2UsIm5hbWUiOiJTdmV0YWEiLCJpYXQiOjE2ODE1Nzc4MzEsImV4cCI6MTY4MTU3OTYzMX0.PPU73OZJe50AIWEOQ0JoxG2rFExgpaHMrK0M9dEK6z8'
);

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

export const getTransactionsStatistics = createAsyncThunk(
  'finance/getTransactionsStatistics',
  async (body, { rejectWithValue }) => {
    console.log(body);
    try {
      const { data } = await axios(`${BASE_URL}/transaction/statistic`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNldHdnYXd3dzEyQHNkZi5jb20iLCJfaWQiOiI2NDNhZjUyMGQwNGZiMGY1NDdjMTY1ZjgiLCJpc0FjdGl2YXRlZCI6ZmFsc2UsIm5hbWUiOiJTdmV0YWEiLCJiYWxhbmNlIjowLCJpYXQiOjE2ODE1ODU0NDIsImV4cCI6MTY4MTU4NzI0Mn0.UBA_t5OTen1qqSEiHlIs2_A09Junh0jNh95nZh_k3PQ',
        },
        body,
      });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
