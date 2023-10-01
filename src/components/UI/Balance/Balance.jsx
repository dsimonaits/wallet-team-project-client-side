import React from 'react';
import { useSelector } from 'react-redux';
import {
  BalanceContainer,
  BalanceTitle,
  TotalBalance,
  Grivan,
} from './Balance.styled';

const Balance = () => {
  const totalBalance = useSelector((state) => state.session.user.balance);

  const formattedTotalBalance = totalBalance.toFixed(2).toLocaleString('fr-FR');

  return (
    <BalanceContainer>
      <BalanceTitle>YOUR BALANCE</BalanceTitle>
      <TotalBalance>
        <Grivan>&#8372;</Grivan>
        {formattedTotalBalance}
      </TotalBalance>
    </BalanceContainer>
  );
};

export default Balance;
