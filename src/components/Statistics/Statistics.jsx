import { ChartJs } from 'components/ChartJS/ChartJS';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectLabels } from 'components/SelectLabels/SelectLabels';
import {
  selectStatistic,
  selectIsLoading,
} from 'redux/finance/financeSelectors';
import { getTransactionsStatistics } from 'redux/finance/financeOperations';

import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Text, Wrapper, SubWrapper, Box } from './Statistics.styled';

export const Statistics = () => {
  const [select, setSelect] = useState({ month: '4', year: '2023' });

  const dispatch = useDispatch();
  const statistic = useSelector(selectStatistic);
  const loading = useSelector(selectIsLoading);

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
        <>{statistic && !loading && <ChartJs statistic={statistic} />}</>

        <Box>
          <SelectLabels handleSelect={handleSelect} />
          {statistic && <StatisticsList statistic={statistic} />}
        </Box>
      </SubWrapper>
    </Wrapper>
  );
};

export default Statistics;
