import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-team-project-hg8k.onrender.com';

const signup = async body => {
  const { data } = await axios.post('api/user/signup', body);

  return data.ResponseBody;
};

const login = async body => {
  const { data } = await axios.post('/api/user/login', body);

  return data.ResponseBody;
};

const logout = async () => {
  await axios.post('api/user/logout');
};

const getCurrent = async () => {
  const { data } = await axios.get('api/user/current');

  return data.ResponseBody;
};

const API = {
  signup,
  login,
  logout,
  getCurrent,
};

export default API;
