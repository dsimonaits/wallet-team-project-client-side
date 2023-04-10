import axios from 'axios';

const CURRENCY_CACHE_KEY = 'currencyCache';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

const currenciesApi = async () => {
  const cachedResponse = localStorage.getItem(CURRENCY_CACHE_KEY);

  if (cachedResponse) {
    const { data, timestamp } = JSON.parse(cachedResponse);
    const lastRequest = Date.now() - timestamp;

    if (lastRequest < CACHE_TTL) {
      console.log(`Returning cached response (lastRequest: ${lastRequest}ms)`);
      return data;
    }
  }

  try {
    const response = await axios(
      'https://wallet-team-project-hg8k.onrender.com/api/currenciesApi'
    );
    const responseData = response.data.ResponseBody;

    console.log(responseData);

    localStorage.setItem(
      CURRENCY_CACHE_KEY,
      JSON.stringify({
        data: responseData,
        timestamp: Date.now(),
      })
    );

    return responseData;
  } catch (error) {
    console.log(error.message);
  }
};

export default currenciesApi;
