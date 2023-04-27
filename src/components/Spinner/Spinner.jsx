import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/finance/financeSelectors';
import { selectIsRefreshing } from 'redux/session/sessionSelectors';
import { ThreeDots } from 'react-loader-spinner';
import { SpinnerContainer } from './Spinner.styled';

const Spinner = ({ position }) => {
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (!isLoading || !isRefreshing) {
    return null;
  }

  return (
    <SpinnerContainer position={position}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </SpinnerContainer>
  );
};

export default Spinner;
