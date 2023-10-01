import currenciesApi from '../../../services/api/currenciesApi';
import currenCiesList from './currenciesList.json';
import { useState, useEffect } from 'react';
import { Table, CurrencyWrapper } from './Currency.styled';

const Currency = () => {
  const [currencyCourse, setCurrencyCourse] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const currencies = await currenciesApi();

        setCurrencyCourse(currencies.data);
        return;
      } catch (error) {
      } finally {
      }
    };

    fetchCurrencies();
  }, []);

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
                    <td>{item.rateBuy.toFixed(2)}</td>
                    <td>{item.rateSell.toFixed(2)}</td>
                  </tr>
                );
              }
              return null;
            })}
        </tbody>
      </Table>
    </CurrencyWrapper>
  );
};

export default Currency;
