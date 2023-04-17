import { ChartJs } from 'components/ChartJS/ChartJS';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectLabels } from 'components/SelectLabels/SelectLabels';
import { selectStatistic } from 'redux/finance/financeSelectors';
import { getTransactionsStatistics } from 'redux/finance/financeOperations';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Text, Wrapper, SubWrapper, Box } from './Statistics.styled';

export const Statistics = () => {
  const [select, setSelect] = useState({ month: '4', year: '2023' });
  const dispatch = useDispatch();

  // const statistic = useSelector(selectStatistic);

  const statistic = {
    result: [
      {
        totalSum: 3400,
        category: 'Car',
      },
      {
        totalSum: 2400,
        category: 'Self care',
      },
    ],
    transaction: [
      {
        type: true,
        sum: 43000.12,
      },
    ],
  };
  // useEffect(() => {
  //   dispatch(getTransactionsStatistics(select));
  // }, [dispatch, select]);

  const hadleSelect = data => {
    setSelect(data);
  };

  return (
    <Wrapper>
      <Text>Statistics</Text>
      <SubWrapper>
        <ChartJs statistic={statistic} />
        <Box>
          <SelectLabels handleSelect={hadleSelect} />
          <StatisticsList statistic={statistic} />
        </Box>
      </SubWrapper>
    </Wrapper>
  );
};
