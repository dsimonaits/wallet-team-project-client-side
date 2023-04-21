import * as React from 'react';
import 'react-datetime/css/react-datetime.css';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import {
  Form,
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

import { useState } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';

import { updateTransaction } from '../../redux/finance/financeOperations';
// import Switch from './Switch';

const UpdateForm = ({ toggleModal, transactionUpdate }) => {
  const [startDate, setStartDate] = useState(transactionUpdate.date);
  const [sum, setSum] = useState(transactionUpdate.sum);
  const [category, setCategory] = useState(transactionUpdate.category);
  const [comment, setComment] = useState(transactionUpdate.comment);
  const [onSwitch, setOnSwitch] = useState(transactionUpdate.type);
  const [theme, setTheme] = useState(
    transactionUpdate.type ? 'themeInc' : 'themeExp'
  );
  const isThemeExpense = theme === 'themeExp';
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setTheme(isThemeExpense ? 'themeInc' : 'themeExp');
  };

  const { _id: id } = transactionUpdate;

  const handleChangeSwitch = () => {
    setOnSwitch(!onSwitch);
    toggleTheme();
  };

  const handleCashChange = e => setSum(e.target.value);

  const handelChangeTextarea = e => setComment(e.target.value);

  const handelSubmit = e => {
    console.log(transactionUpdate);
    e.preventDefault();
    if (!sum) {
      return toast.warn('sum is a required field');
    }
    if (!startDate) {
      return toast.warn('date is a required field');
    }
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
    setSum('');
    setCategory('');
    setComment('');
  };

  const themeInc = {
    income: '#24CCA7',
    expense: '#dfdfdf',
  };
  const themeExp = {
    expense: '#FF6596',
    income: '#dfdfdf',
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

  // const dateNow = new Date;
  // const formatDate = `${date} ${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()} `

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
                defaultChecked={transactionUpdate.type}
                // checked={onSwitch}
                value={onSwitch}
                type="checkbox"
                onChange={handleChangeSwitch}
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
                disabled={!sum || !startDate || ''}
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
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default UpdateForm;
