import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteContacts = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `https://wallet-team-project-hg8k.onrender.com/transactions/${id}`
      );
      // console.log(data);
      console.log(`Transaction successfully removed`);
      return data.id;
    } catch (error) {
      console.log(`Contact not removed`);
      return rejectWithValue(error);
    }
  }
);
