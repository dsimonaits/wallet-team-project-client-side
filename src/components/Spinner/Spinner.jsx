import React from 'react';
import { useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner'; // Импортируйте ThreeDots
import { SpinnerContainer } from './Spinner.styled';

const Spinner = () => {
  const isLoading = useSelector((state) => state.global.isLoading);

  if (!isLoading) {
    return null;
  }

  return (
    <SpinnerContainer>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </SpinnerContainer>
  );
};

export default Spinner;