import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};
//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

token.set(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV0d2dhd3d3MUBzZGYuY29tIiwiX2lkIjoiNjQzZDZlYTkzNWNlMjEzZjcyYWE1NGI1IiwiaXNBY3RpdmF0ZWQiOmZhbHNlLCJuYW1lIjoiU3ZldGFhIiwiYmFsYW5jZSI6MCwiaWF0IjoxNjgxNzQ3NzE4LCJleHAiOjE2ODE3NDk1MTh9.IqZhV2KeTP6pKKRT-wNe6gTlNv3cl-ijOAdhEhR-EZ8'
);
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
// headers: {
//   Authorization:
//     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNldHdnYXd3dzEyQHNkZi5jb20iLCJfaWQiOiI2NDNhZjUyMGQwNGZiMGY1NDdjMTY1ZjgiLCJpc0FjdGl2YXRlZCI6ZmFsc2UsIm5hbWUiOiJTdmV0YWEiLCJiYWxhbmNlIjowLCJpYXQiOjE2ODE1ODU0NDIsImV4cCI6MTY4MTU4NzI0Mn0.UBA_t5OTen1qqSEiHlIs2_A09Junh0jNh95nZh_k3PQ',
// },
