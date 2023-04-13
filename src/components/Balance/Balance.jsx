import React from 'react';
import { connect } from 'react-redux';
import { BalanceContainer, BalanceTitle, TotalBalance } from './Balance.styled';

const Balance = ({ totalBalance }) => {
  return (
    <BalanceContainer>
      <BalanceTitle>YOUR BALANCE</BalanceTitle>
      <TotalBalance>{totalBalance}</TotalBalance>
    </BalanceContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    totalBalance: state.finance.totalBalance,
  };
};

export default connect(mapStateToProps)(Balance);