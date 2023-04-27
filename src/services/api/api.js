import axios from 'axios';
import { logOut } from 'redux/session/sessionOperations';
import { useDispatch } from 'react-redux';

const API_URL = 'https://wallet-team-project-hg8k.onrender.com';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    if (error.response.status === 401) {
      const dispatch = useDispatch();
      dispatch(logOut());
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export const setAuthToken = token => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export default api;
