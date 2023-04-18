import currenciesApi from '../../services/api/currenciesApi';
import currenCiesList from './currenciesList.json';
import { useState, useEffect } from 'react';
import { Table, CurrencyWrapper } from './Currency.styled';
import { selectIsLoading } from 'redux/finance/financeSelectors';
import Spinner from 'components/Spinner/Spinner';
import { useSelector } from 'react-redux';

const Currency = () => {
  const [currencyCourse, setCurrencyCourse] = useState(null);

  const fetching = useSelector(selectIsLoading);

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
      {fetching ? (
        <Spinner />
      ) : (
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
                return console.log();
              })}
          </tbody>
        </Table>
      )}
    </CurrencyWrapper>
  );
};

export default Currency;
