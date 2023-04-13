import { ChartJs } from 'components/ChartJS/ChartJS';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'redux/statistic/statisticOperations';
import { allTransactions } from 'redux/statistic/statisticSelectors';

export const Statistics = () => {
  //   const [s, setS] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  //   const transactions = useSelector(allTransactions);

  //   if (transactions.length !== 0) {
  //     const total = transactions.reduce((acc, { sum }) => {
  //       return acc + sum;
  //     }, 0);
  //     setS(total);
  //   }

  return <ChartJs />;
};
