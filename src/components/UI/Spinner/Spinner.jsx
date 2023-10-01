import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/session/sessionSelectors';
import { selectIsLoading } from 'redux/finance/financeSelectors';
import { ThreeDots } from 'react-loader-spinner';
import { SpinnerContainer } from './Spinner.styled';

const Spinner = ({ position }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  if (!isRefreshing && !isLoading) {
    return null;
  }

  return (
    <SpinnerContainer position={position}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </SpinnerContainer>
  );
};

export default Spinner;
