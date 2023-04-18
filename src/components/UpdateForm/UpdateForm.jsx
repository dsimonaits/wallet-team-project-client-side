import * as React from 'react';
// import { AddBtn } from './AddButton.styled';
import Datetime from 'react-datetime';

import 'react-datetime/css/react-datetime.css';

import { ThemeProvider } from 'styled-components';

import {
  Form,
  //   AddIcon,
  LabelTitle,
  Expense,
  ToggleContainer,
  NumberInput,
  MenuInputs,
  ItemInput,
  Textarea,
  ExitButton,
  AddButton,
  ButtonItem,
  Select,
  Checkbox,
  MenuBtn,
  Income,
  SpanSlash,
  LabelEdit,
} from './UpdateForm.styled';
// import { SelectFunk } from './Select';

// import { Formik } from 'formik';
// import sprite from '../../images/sprite.svg';
// import Modal from '../Modal/Modal';
import { useState } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
// import { Switch } from '../Switch/switch';
// import { string } from 'prop-types';
// import { Label } from 'components/Switch/switch.styled';
// import { toggleModalEditTransaction } from '../../redux/global/globalSlice';
// import { selectIsModalEditTransactionOpen } from '../../redux/global/globalSelectors';
// import { addTransaction } from '../../redux/finance/financeSlice';
import { updateTransaction } from '../../redux/finance/financeOperations';

const UpdateForm = ({ toggleModal, transactionUpdate }) => {
  const [startDate] = useState([new Date()]);
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');
  const [onSwitch, setOnSwitch] = useState(true);
  const [theme, setTheme] = useState('themeInc');
  const isThemeExpense = theme === 'themeExp';
  const dispatch = useDispatch();
  //   const isEditModalIsOpen = useSelector(selectIsModalEditTransactionOpen);

  const toggleTheme = () => {
    setTheme(isThemeExpense ? 'greenText' : 'themeExp');
  };

  const handleChangeSwitch = () => {
    setOnSwitch(!onSwitch);
    toggleTheme();
  };
  const handleCashChange = e => setSum(e.target.value);

  const handelChangeTextarea = e => setComment(e.target.value);

  const handelSubmit = e => {
    e.preventDefault();
    switch (onSwitch) {
      case true:
        const resIncome = dispatch(
          updateTransaction({
            type: onSwitch,
            sum: sum,
            category: 'Other',
            date: startDate[0],
            comment: comment,
          })
        );
        console.log(resIncome);
        break;
      case false:
        const resExpenses = dispatch(
          updateTransaction({
            type: onSwitch,
            sum: sum,
            category: category,
            date: startDate[0],
            comment: comment,
          })
        );
        console.log(resExpenses);
        break;

      default:
        break;
    }
  };

  const themeInc = {
    income: '#24CCA7' /*'Tealish'Matching Pantone */,
    // expense:"#FF6596"
  };
  const themeExp = {
    //  income: "#24CCA7", /*'Tealish'Matching Pantone */
    expense: '#FF6596',
  };

  // DATE formatter //////////////////////////////////////////
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}.${
      month < 10 ? '0' : ''
    }${month}.${year}`;
  }

  return (
    <>
      <ThemeProvider theme={isThemeExpense ? themeExp : themeInc}>
        <Form onSubmit={handelSubmit}>
          <LabelTitle htmlFor="">Edit transaction</LabelTitle>
          <ToggleContainer>
            <LabelEdit>
              <Income>Income</Income>
              <SpanSlash>/</SpanSlash>
              <Expense>Expense</Expense>
              <Checkbox
                name="onSwitch"
                value={onSwitch}
                type="checkbox"
                onClick={handleChangeSwitch}
              />
            </LabelEdit>
          </ToggleContainer>

          {!onSwitch && (
            <div>
              <Select
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="Main expenses">Main expenses</option>
                <option value="Car">Car</option>
                <option value="Self care">Self care</option>
                <option value="Child care">Child care</option>
                <option value="Household products">Household products</option>
                <option value="Education">Education</option>
                <option value="Leisure">Leisure</option>
                <option value="Other">Other expenses</option>
              </Select>
            </div>
          )}

          <MenuInputs>
            <ItemInput>
              <NumberInput
                size="small"
                id="filled-number"
                type="number"
                placeholder="0.00"
                name="sum"
                value={transactionUpdate.sum}
                onChange={handleCashChange}
              />
            </ItemInput>
            <ItemInput>
              <Datetime
                timeFormat={false}
                placeholder={transactionUpdate.date}
                value={formatDate(transactionUpdate.date)}
                inputProps={{
                  style: {
                    height: 'auto',
                    width: '181px',
                    border: 'transparent',
                    borderBottom: '1px solid #E0E0E0',
                    color: 'rgba(0, 0, 0, 1) ',
                    outline: 'none',
                  },
                }}
                dateFormat="yyyy-MM-DD"
                isValidDate={current => {
                  const today = new Date();
                  const oneDay = 24 * 60 * 60 * 1000; // number of milliseconds in one day
                  const yesterday = new Date(today.getTime() - oneDay);
                  const date = current.isAfter(yesterday);
                  return date;
                }}
              />
            </ItemInput>
          </MenuInputs>
          <ItemInput>
            <Textarea
              value={transactionUpdate.comment}
              onChange={handelChangeTextarea}
              name="comment"
              rows="3"
              placeholder="Comment"
            />
          </ItemInput>

          <MenuBtn>
            <ButtonItem>
              <AddButton type="submit">SAVE</AddButton>
            </ButtonItem>
            <ButtonItem>
              <ExitButton type="button" onClick={toggleModal}>
                Cancel
              </ExitButton>
            </ButtonItem>
          </MenuBtn>
        </Form>
      </ThemeProvider>
    </>
  );
};

export default UpdateForm;
