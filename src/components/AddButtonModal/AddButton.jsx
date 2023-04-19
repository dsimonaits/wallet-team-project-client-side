import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-datetime/css/react-datetime.css';
import { ThemeProvider } from 'styled-components';

import DateRangeIcon from '@mui/icons-material/DateRange';
import {
  AddBtn,
  FormStyle,
  AddIconBtn,
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
  // Select,
  Slider,
  Checkbox,
  MenuBtn,
  Income,
  StyledDatetime,
  MenuCalendarNumber,
  ItemCalendarNumber,
  DivRelative,
  Option,

} from './AddButton.styled';


import sprite from '../../images/sprite.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from 'components/Switch/switch.styled';
import { toggleModalAddTransaction } from '../../redux/global/globalSlice';
import { selectIsModalAddTransactionOpen } from '../../redux/global/globalSelectors';
import { addTransaction } from '../../redux/finance/financeOperations';
import Select from 'react-select'
// import makeAnimated from 'react-select/animated';
// import { flavourOptions } from '../data';


const AddBtnFunction = ({ categories }) => {
  const [startDate, setStartDate] = useState([new Date()]);
  const [sum, setSum] = useState('');
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');
  const [onSwitch, setOnSwitch] = useState(true);
  const [theme, setTheme] = useState('themeInc');
  const isThemeExpense = theme === 'themeExp';
  const dispatch = useDispatch();
  const isAddModalIsOpen = useSelector(selectIsModalAddTransactionOpen);

  const options = [
  { value: 'Main expenses', label: 'Main expenses' },
  { value: 'Car', label: 'Car',color:'black' },
    { value: 'Self care', label: 'Self care'},
  { value: 'Child care', label: 'Child care' },
  { value: 'Household products', label: 'Household products' },
    { value: 'Education', label: 'Education'},
  { value: 'Leisure', label: 'Leisure' },
  { value: 'Other', label: 'Other' },

]
  const colorStyle = {
    control: (styles) => ({
      ...styles, backgroundColor: 'rgba(255, 255, 255, 0.7)',color:'#000000', minMidth: '280px', border: 'transparent', outline: 'none',
      minWidth: '280px', width: '100%', borderBottom: '1px solid #e0e0e0', cursor: 'pointer', marginBottom: '40px', '&:hover': {
        border: '1px solid #ccc',boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',backdropFilter: 'blur(25px)'
      },
      '&:focus': {
        backgroundColor: 'var(--primary-white-color )',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      }, '&:hover': {
        backgroundColor: 'var(--primary-white-color )',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      }
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isFocused ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 1)',
      color: state.isFocused ? ' #FF6596;' : '#000000',
    }),
  }
  const handelSelectChang = selectedOption => {
    console.log('handelSelectChang', selectedOption)

}
 

  const toggleTheme = () => {
    setTheme(isThemeExpense ? 'greenText' : 'themeExp');
  };

  const handleChangeSwitch = () => {
    setOnSwitch(!onSwitch);
    toggleTheme();
  };
  const handleCashChange = e => setSum(e.target.value);

  const handelChangeTextarea = e => setComment(e.target.value);

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
              date: startDate,
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
              date: startDate,
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
    
            <FormStyle
              onSubmit={handelSubmit}
            >
              <LabelTitle htmlFor="">Add transaction</LabelTitle>
              {/* <Switch toggleTheme={toggleTheme} /> */}
              <ToggleContainer>
                <Income>Income</Income>
                <Label>
                  <Checkbox
                    name="onSwitch"
                    value={onSwitch}
                    type="checkbox"
                    
                    onClick={handleChangeSwitch}
                  />
                  <Slider></Slider>
                </Label>
                <Expense>Expense</Expense>
              </ToggleContainer>
              {!onSwitch && (
                <Select  placeholder='Select a category' /*value={category}*/ onChange={handelSelectChang} /*onChange={e => setCategory(e.target.value)}*/ options={options} styles={colorStyle}/>
   )}
                 {/* <div> */}
                  {/* <Select
                    value={category}
                    category={category}
                    onChange={e => setCategory(e.target.value)}
                  > */}
                    {/* <Option value="Main expenses">Main expenses</Option>
                    <Option value="Car">Car</Option>
                    <option value="Self care">Self care</option>
                    <option value="Child care">Child care</option>
                    <option value="Household products">
                      Household products
                    </option>
                    <option value="Education">Education</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Other">Other expenses</option> */}
                  {/* </Select> */}
                {/* // </div>
              // )} */}

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
                          timeFormat={false}
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

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const AddBtn = () => {
//    const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

//   return (
//     <>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <div>
//  <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//           Add transaction
//           </Typography>
//           <form action="">
//        <p>Income</p>
//           <input type="radio" name="income" value="income" id= "income" checked />
//            <input type="radio" name="expense" value="expense" id="expense" checked />
//         <p>Expense</p>
//         {/* <select name="month" id="month">
//           <optgroup label="Summer">
//             <option value="s6">June</option>
//             <option value="s7">July</option>
//             <option value="s8">August</option>
//           </optgroup>
//         </select> */}
//               <input
//           type="number"
//           name="cash"
//           min="0"
//           max="150"
//           step="0.1"
//           value="0"
//               />

//         {/* <input type="text" name="username" placeholder="Jacob Mercer" /> */}

//         <input type="date" min="2023-01-01" max="2025-01-01" />
//         <textarea
//           name="comment"
//           rows="3"
//           placeholder="Comment"
//         ></textarea>
//         <button>ADD</button>
//         <button>Cancel</button>
//       </form>
//         </Box>
//       </Modal>
//           {/* <h1>Add transaction</h1> */}

//       </div>
//       </>
//   );
// };
// export default AddBtn;
