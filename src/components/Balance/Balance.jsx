import React from 'react';
import { connect } from 'react-redux';
import {
  BalanceContainer,
  BalanceTitle,
  TotalBalance,
  Grivan,
} from './Balance.styled';

const Balance = ({ totalBalance }) => {
  return (
    <BalanceContainer>
      <BalanceTitle>YOUR BALANCE</BalanceTitle>
      <TotalBalance>
        <Grivan>&#8372;</Grivan>
        {totalBalance}
      </TotalBalance>
    </BalanceContainer>
  );
};

const mapStateToProps = state => {
  return {
    totalBalance: state.session.user.balance,
  };
};

export default connect(mapStateToProps)(Balance);
