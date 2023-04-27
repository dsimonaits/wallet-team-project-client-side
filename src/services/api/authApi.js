import api from './api';

const signup = async body => {
  const { data } = await api.post('api/user/signup', body);

  return data.ResponseBody;
};

const login = async body => {
  const { data } = await api.post('/api/user/login', body);

  return data.ResponseBody;
};

const logout = async () => {
  await api.post('api/user/logout');
};

const getCurrent = async () => {
  const { data } = await api.get('api/user/current');

  return data.ResponseBody;
};

const API = {
  signup,
  login,
  logout,
  getCurrent,
};

export default API;
