import React from 'react';
import { useSelector } from 'react-redux';
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

const mapStateToProps = state => {
  return {
    totalBalance: state.session.user.balance,
  };
};

export default connect(mapStateToProps)(Balance);
