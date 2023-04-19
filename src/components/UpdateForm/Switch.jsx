import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LabelEdit = styled.label`
  display: flex;
  align-items: center;
`;

const Income = styled.span`
  color: ${props => props.theme.colors.income};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  margin-right: 5px;
  cursor: pointer;
`;

const Expense = styled.span`
  color: ${props => props.theme.colors.expense};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  margin-left: 5px;
  cursor: pointer;
`;

const SpanSlash = styled.span`
  margin: 0 5px;
`;

const Checkbox = styled.input`
  margin-left: 10px;
`;

const Switch = ({ onSwitch, onChange }) => {
  const [isActive, setIsActive] = useState(onSwitch);

  const handleClick = () => {
    setIsActive(!isActive);
    onChange(!isActive);
  };

  return (
    <ToggleContainer>
      <LabelEdit>
        <Income active={isActive} onClick={handleClick}>
          Income
        </Income>
        <SpanSlash>/</SpanSlash>
        <Expense active={!isActive} onClick={handleClick}>
          Expense
        </Expense>
        <Checkbox
          name="onSwitch"
          defaultChecked={isActive}
          value={isActive}
          type="checkbox"
          onChange={() => {}}
        />
      </LabelEdit>
    </ToggleContainer>
  );
};

export default Switch;
