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
  return (
    <>
      <ThemeProvider theme={isThemeExpense ? themeExp : themeInc}>
        {/* <Modal
          onClose={toggleModal}
          style={{
            width: '320px',
            height: '600px',
          }}
          // value={date}
        > */}
        <Form onSubmit={handelSubmit}>
          <LabelTitle htmlFor="">Edit transaction</LabelTitle>
          {/* <Switch toggleTheme={toggleTheme} /> */}
          <ToggleContainer>
            <LabelEdit>
              <Income>Income</Income>
              <SpanSlash>/</SpanSlash>
              <Expense>Expense</Expense>
              <Checkbox
                name="onSwitch"
                value={onSwitch}
                type="checkbox"
                // onSwitch={onSwitch}
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
                placeholder={transactionUpdate.sum}
                name="sum"
                value={sum}
                onChange={handleCashChange}
              />
            </ItemInput>
            <ItemInput>
              <Datetime
                // updateOnView={true}
                timeFormat={false}
                placeholder={transactionUpdate.date}
                // firstDate={startDate(2023)}
                // lastDate={startDate(2025)}
                value={startDate}
                // input={true}//Показывать ли поле ввода для редактирования даты вручную.
                // initialValue={startDate} Представляет выбранную дату для компонента, чтобы использовать его в качестве неуправляемого компонента. Это свойство анализируется Moment.js, поэтому можно использовать строку даты или объект момента. Если вам нужно программно установить выбранную дату после инициализации средства выбора, используйте вместо этого свойство value.
                // onChange={e => setStartDate(e.target.value)}
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
                // isValidDate={(current) => {
                //  current.isBefore(Datetime.moment().add(1, 'day'))
                // }},
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
              value={comment}
              onChange={handelChangeTextarea}
              name="comment"
              rows="3"
              placeholder={transactionUpdate.comment}
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
        {/* </Modal> */}
      </ThemeProvider>
    </>
  );
};

export default UpdateForm;
