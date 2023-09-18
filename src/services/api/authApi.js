import axios from 'axios';
import api from './api';

const API_URL = 'https://wallet-team-project-hg8k.onrender.com';

const signup = async body => {
  const { data } = await api.post('api/user/signup', body);

  return data.ResponseBody;
};

const login = async body => {
  const { data } = await api.post('/api/user/login', body);
  console.log(data);
  return data;
};

const logout = async () => {
  await api.post('api/user/logout');
};

const getCurrent = async () => {
  const { data } = await api.get('api/user/current');
  return data;
};
const refreshToken = async () => {
  const { data } = await axios.get(`${API_URL}/api/user/refresh`, {
    withCredentials: true,
  });

  return data;
};

const API = {
  signup,
  login,
  logout,
  getCurrent,
  refreshToken,
};

export default API;
