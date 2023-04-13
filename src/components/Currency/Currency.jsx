import currenciesApi from '../../services/api/currenciesApi';
import currenCiesList from './currenciesList.json';
import { useState, useEffect } from 'react';
import { Table, CurrencyWrapper } from './Currency.styled';

const Currency = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currencyCourse, setCurrencyCourse] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchCurrencies = async () => {
      try {
        const currencies = await currenciesApi();

        setCurrencyCourse(currencies.data);
        return;
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  console.log(isLoading);

  return (
    <CurrencyWrapper>
      <Table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>

        <tbody>
          {currencyCourse &&
            currencyCourse.map((item, index) => {
              const currencyCode = item.currencyCodeA;
              const currencyCodeToString = currencyCode.toString();
              const currencyName = currenCiesList[currencyCodeToString];

              if (
                currenCiesList[currencyCodeToString] &&
                !(item.currencyCodeA === 978 && item.currencyCodeB === 840)
              ) {
                return (
                  <tr key={index}>
                    <td>{currencyName}</td>
                    <td>{item.rateBuy}</td>
                    <td>{item.rateSell}</td>
                  </tr>
                );
              }
              return;
            })}
        </tbody>
      </Table>
    </CurrencyWrapper>
  );
};

export default Currency;
