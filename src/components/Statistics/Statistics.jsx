import { ChartJs } from 'components/ChartJS/ChartJS';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { SelectLabels } from 'components/SelectLabels/SelectLabels';
import {
  selectStatistic,
  selectIsLoading,
} from 'redux/finance/financeSelectors';
import { selectToken, selectIsLoggedIn } from 'redux/session/sessionSelectors';
import { getTransactionsStatistics } from 'redux/finance/financeOperations';

import { StatisticsList } from 'components/StatisticsList/StatisticsList';
import { Text, Wrapper, SubWrapper, Box } from './Statistics.styled';

export const Statistics = () => {
  const [select, setSelect] = useState({ month: '4', year: '2023' });

  const dispatch = useDispatch();
  const statistic = useSelector(state => selectStatistic(state), shallowEqual);
  const loading = useSelector(state => selectIsLoading(state), shallowEqual);
  const userLoggedIn = useSelector(selectIsLoggedIn);

  const token = useSelector(selectToken);

  useEffect(() => {
    if (token && userLoggedIn) {
      dispatch(getTransactionsStatistics(select));
    }
  }, [dispatch, token, userLoggedIn, select]);

  const handleSelect = data => {
    setSelect(data);
  };

  return (
    <>
      {userLoggedIn && (
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
      )}
    </>
  );
};

export default Statistics;
