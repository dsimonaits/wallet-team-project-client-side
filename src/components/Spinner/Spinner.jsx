import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/finance/financeSelectors';
import { ThreeDots } from 'react-loader-spinner';
import { SpinnerContainer } from './Spinner.styled';

const Spinner = ({ position }) => {
  const isLoading = useSelector(selectIsLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <SpinnerContainer position={position}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </SpinnerContainer>
  );
};

export default Spinner;
