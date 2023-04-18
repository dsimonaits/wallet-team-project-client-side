import axios from 'axios';

const CURRENCY_CACHE_KEY = 'currencyCache';
const CACHE_TTL = 86400000;

const currenciesApi = async () => {
  const cachedResponse = localStorage.getItem(CURRENCY_CACHE_KEY);

  if (cachedResponse) {
    const { data, timestamp } = JSON.parse(cachedResponse);
    const lastRequest = Date.now() - timestamp;

    if (lastRequest < CACHE_TTL) {
      return data;
    }
  }

  try {
    const response = await axios(
      'https://wallet-team-project-hg8k.onrender.com/api/currenciesApi'
    );
    const responseData = response.data.ResponseBody;

    localStorage.setItem(
      CURRENCY_CACHE_KEY,
      JSON.stringify({
        data: responseData,
        timestamp: Date.now(),
      })
    );

    return responseData;
  } catch (error) {}
};

export default currenciesApi;
