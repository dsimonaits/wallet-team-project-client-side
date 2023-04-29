import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/session/sessionSelectors';
import { ThreeDots } from 'react-loader-spinner';
import { SpinnerContainer } from './Spinner.styled';

const Spinner = ({ position }) => {
  const isRefreshing = useSelector(selectIsRefreshing);

  if (!isRefreshing) {
    return null;
  }

  return (
    <SpinnerContainer position={position}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </SpinnerContainer>
  );
};

export default Spinner;
