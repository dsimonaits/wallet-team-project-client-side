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

  const statistic = useSelector(selectStatistic);

  useEffect(() => {
    dispatch(getTransactionsStatistics(select));
  }, [dispatch, select]);

  const handleSelect = data => {
    setSelect(data);
  };

  return (
    <Wrapper>
      <Text>Statistics</Text>
      <SubWrapper>
        <ChartJs statistic={statistic} />
        <Box>
          <SelectLabels handleSelect={handleSelect} />
          <StatisticsList statistic={statistic} />
        </Box>
      </SubWrapper>
    </Wrapper>
  );
};

export default Statistics;
