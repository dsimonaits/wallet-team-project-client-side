import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://wallet-team-project-hg8k.onrender.com/api';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${BASE_URL}/transaction/getAll`);
      console.log(data);
      return data;
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
