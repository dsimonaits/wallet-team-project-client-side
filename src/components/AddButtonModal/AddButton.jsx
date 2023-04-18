import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from 'yup';
import 'react-datetime/css/react-datetime.css';
import { ThemeProvider } from 'styled-components';
// import { ThemeContext } from 'styled-components'
import DateRangeIcon from '@mui/icons-material/DateRange';
import {
  AddBtn,FormStyle,AddIconBtn,LabelTitle,Expense,ToggleContainer,NumberInput,MenuInputs,ItemInput,Textarea,
  ExitButton,AddButton,ButtonItem,Select,Slider,Checkbox,MenuBtn,Income,StyledDatetime,MenuCalendarNumber,
  ItemCalendarNumber,Dateicon,DivRelative,Option,
  // CalendarIcon
} from './AddButton.styled';

// import { Formik } from 'formik';
import sprite from '../../images/sprite.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from 'components/Switch/switch.styled';
import { toggleModalAddTransaction } from '../../redux/global/globalSlice';
import { selectIsModalAddTransactionOpen } from '../../redux/global/globalSelectors';
import { addTransaction } from '../../redux/finance/financeOperations';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AddBtnFunction = ({ categories }) => {
  const [startDate] = useState([new Date()]);
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');
  const [onSwitch, setOnSwitch] = useState(true);
  const [theme, setTheme] = useState('themeInc');
  const isThemeExpense = theme === 'themeExp';
  const dispatch = useDispatch();
  const isAddModalIsOpen = useSelector(selectIsModalAddTransactionOpen);

  const toggleTheme = () => {
    setTheme(isThemeExpense ? 'greenText' : 'themeExp');
  };

  const handleChangeSwitch = () => {
    setOnSwitch(!onSwitch);
    toggleTheme();
  };
  const handleCashChange = e => setSum(e.target.value);

  const handelChangeTextarea = e => setComment(e.target.value);

  const schema = yup.object().shape({
    comment: yup
      .string()
      .min(1, 'must min length 1')
      .max(12, 'must max length 12'),
    type: yup.boolean(),
    sum: yup.number().required('sum is a required field'),
    category: yup.string().required('category is required'),
    date: yup.date().required(),
  });

  const handelSubmit = async e => {
    e.preventDefault();
    if (!sum) {
      return toast.warn('sum is a required field');
    }
    if (!startDate) {
      return toast.warn('date is a required field');
    }
    try {
      switch (onSwitch) {
        case true:
          const resIncome = dispatch(
            addTransaction({
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
            addTransaction({
              type: onSwitch,
              sum: sum,
              category,
              date: startDate[0],
              comment: comment,
            })
          );
          console.log(resExpenses);
          break;

        default:
          break;
      }
      setOnSwitch(true);
      dispatch(toggleModalAddTransaction());
      setSum('');
      setCategory('');
      setComment('');
    } catch (error) {
      error.errors.forEach(errorMessage => {
        toast.warn(errorMessage);
      });
    }
  };
  const closeModal = () => {
    setOnSwitch(true);
    dispatch(toggleModalAddTransaction());
  };

  const themeInc = {
    income: '#24CCA7',
  };
  const themeExp = {
    expense: '#FF6596',
  };
  return (
    <>
      <ThemeProvider theme={isThemeExpense ? themeExp : themeInc}>
        <AddBtn onClick={() => dispatch(toggleModalAddTransaction())}>
          <AddIconBtn width="24" height="24">
            <use href={`${sprite}#icon-plus`} />
          </AddIconBtn>
        </AddBtn>
        {isAddModalIsOpen && (
          <Modal
            onClose={() => closeModal()}
            style={{
              width: '320px',
              height: '600px',
            }}
          >
            {/* <Formik
       initialValues={{
        sum: '',
       date: '', 
       }}
       validationSchema={schema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       */}
            <FormStyle validationSchema={schema} /*validationSchema={schema}*/ onSubmit={handelSubmit}>
              <LabelTitle htmlFor="">Add transaction</LabelTitle>
              {/* <Switch toggleTheme={toggleTheme} /> */}
              <ToggleContainer>
                <Income>Income</Income>
                <Label>
                  <Checkbox
                    name="onSwitch"
                    value={onSwitch}
                    type="checkbox"
                    // onSwitch={onSwitch}
                    onClick={handleChangeSwitch}
                  />
                  <Slider></Slider>
                </Label>
                <Expense>Expense</Expense>
              </ToggleContainer>
              {!onSwitch && (
                <div>
                  <Select
                    value={category}
                    category={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <Option value="Main expenses">Main expenses</Option>
                    <Option value="Car">Car</Option>
                    <option value="Self care">Self care</option>
                    <option value="Child care">Child care</option>
                    <option value="Household products">
                      Household products
                    </option>
                    <option value="Education">Education</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Other">Other expenses</option>
                  </Select>
                </div>
              )}

              <MenuInputs>
                <ItemInput>
                  <MenuCalendarNumber>
                    <ItemCalendarNumber>
                      <NumberInput
                        size="small"
                        id="filled-number"
                        type="number"
                        placeholder="0.00"
                        name="sum"
                        value={sum}
                        onChange={handleCashChange}
                      />
                    </ItemCalendarNumber>

                    <ItemCalendarNumber>
                      <DivRelative>
                        <StyledDatetime
                          // defaultValue={currentDate}
                          timeFormat={false}
                          value={new Date()}
                          // initialViewDate={new Date()}
                          // InitialViewMode={new Date()}
                          closeOnSelect={true}
                          inputProps={{
                            style: {
                              size: '20px',
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
                            const yesterday = new Date(
                              today.getTime() - oneDay
                            );
                            const date = current.isAfter(yesterday);
                            return date;
                          }}
                        />

                        {/* <CalendarIcon width="20" height="18">
                      <use href={`${sprite}#icon-calendar`} />
                    </CalendarIcon> */}

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
                    </ItemCalendarNumber>
                  </MenuCalendarNumber>
                </ItemInput>
                <ItemInput>
                  {' '}
                  <Textarea
                    value={comment}
                    onChange={handelChangeTextarea}
                    name="comment"
                    rows="3"
                    placeholder="Comment"
                  />
                </ItemInput>
              </MenuInputs>

              <MenuBtn>
                <ButtonItem>
                  <AddButton disabled={!sum || !startDate || ''}>ADD</AddButton>
                </ButtonItem>
                <ButtonItem>
                  <ExitButton type="button" onClick={() => closeModal()}>
                    Cancel
                  </ExitButton>
                </ButtonItem>
              </MenuBtn>
            </FormStyle>
            {/* </Formik> */}
          </Modal>
        )}
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default AddBtnFunction;
