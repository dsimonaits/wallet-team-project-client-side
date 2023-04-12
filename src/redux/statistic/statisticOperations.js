import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllTransactions = createAsyncThunk(
  'transaction/fetchAllTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('localhost:3000/api/transaction/getAll', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM1YjRhOTI2YjJlOTllYTY5Y2E5N2YiLCJpYXQiOjE2ODEzMjM3NzQsImV4cCI6MTY4MTkyODU3NH0.BOH6lWiaNKFdNzwQn2eEPXHLTF0Rdi_FY-kuykEtxE0',
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
