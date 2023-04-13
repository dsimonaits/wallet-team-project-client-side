import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-team-project-hg8k.onrender.com';

const signup = async body => {
  const { data } = await axios.post('api/user/signup', body);
  return data;
};

const userLogin = async body => {
  const { data } = await axios.post('/api/user/login', body);
  return data;
};

const logout = async () => {
  await axios.post('api/user/logout');
};

const getCurrent = async () => {
  const { data } = await axios.get('api/user/current');
  return data;
};

const API = {
  signup,
  userLogin,
  logout,
  getCurrent,
};

export default API;
