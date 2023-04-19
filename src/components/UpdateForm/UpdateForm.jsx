import * as React from 'react';
// import { AddBtn } from './AddButton.styled';
// import Datetime from 'react-datetime';

import 'react-datetime/css/react-datetime.css';
import DateRangeIcon from '@mui/icons-material/DateRange';
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
  StyledDatetime,
  DivRelative,
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
  const [startDate, setStartDate] = useState(transactionUpdate.date);
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
  console.log(startDate);
  const { _id: id } = transactionUpdate;

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
        dispatch(
          updateTransaction({
            id,
            type: onSwitch,
            sum: sum,
            date: startDate,
            comment: comment,
          })
        );
        toggleModal();
        break;
      case false:
        dispatch(
          updateTransaction({
            id,
            type: onSwitch,
            sum: sum,
            category: category,
            date: startDate,
            comment: comment,
          })
        );
        toggleModal();
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
                value={sum}
                onChange={handleCashChange}
              />
            </ItemInput>
            <ItemInput>
              <DivRelative>
                <StyledDatetime
                  timeFormat={false}
                  placeholder={transactionUpdate.date}
                  value={formatDate(startDate)}
                  closeOnSelect={true}
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
                  onChange={value => setStartDate(value.toISOString())}
                  // isValidDate={current => {
                  //   const today = new Date();
                  //   const oneDay = 24 * 60 * 60 * 1000; // number of milliseconds in one day
                  //   const yesterday = new Date(today.getTime() - oneDay);
                  //   const date = current.isAfter(yesterday);
                  //   return setStartDate(date);
                  // }}
                />
                <DateRangeIcon
                  color="primary"
                  fontSize="small"
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                  }}
                />
              </DivRelative>
            </ItemInput>
          </MenuInputs>
          <ItemInput>
            <Textarea
              value={comment}
              onChange={handelChangeTextarea}
              name="comment"
              rows="3"
              placeholder="Comment"
            />
          </ItemInput>

          <MenuBtn>
            <ButtonItem>
              <AddButton
                type="submit"
                // onClick={toggleModal}
              >
                SAVE
              </AddButton>
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
