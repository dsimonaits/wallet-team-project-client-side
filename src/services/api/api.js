import axios from 'axios';

const API_URL = 'https://wallet-team-project-hg8k.onrender.com';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const { data } = await axios.get(`${API_URL}/api/user/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', data.ResponseBody.data.accessToken);
        return api.request(originalRequest);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
);

export default api;
