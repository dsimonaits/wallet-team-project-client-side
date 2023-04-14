import { ChartJs } from 'components/ChartJS/ChartJS';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectLabels } from 'components/SelectLabels/SelectLabels';
import { selectTransactions } from 'redux/finance/financeSelectors';
import { fetchTransactions } from 'redux/finance/financeOperations';

export const Statistics = () => {
  // const [s, setS] = useState(0);
  const dispatch = useDispatch();

  const transactions = useSelector(selectTransactions);
  // console.log(transactions);
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // useEffect(() => {
  //   setS(transactions);
  // }, [transactions]);

  //   const transactions = useSelector(allTransactions);

  return (
    <>
      <ChartJs transactions={transactions} />
      <SelectLabels />
    </>
  );
};
