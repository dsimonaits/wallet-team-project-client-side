// // import * as React from 'react';
// import styled from '@emotion/styled';
// import { AddBtn } from './AddButton.styled';
// import Datetime from 'react-datetime';
// import 'react-datetime/css/react-datetime.css';
// // import DatePicker from 'react-datepicker';
// import { nanoid } from 'nanoid';
// import {
//   Form,
//   ModalContainer,
//   AddIcon,
//   LabelTitle,
//   Expense,
//   ToggleContainer,
//   NumberInput,
//   MenuInputs,
//   ItemInput,
//   Textarea,
//   ExitButton,
//   AddButton,
//   ButtonItem
// } from './AddButton.styled';
// import { Select } from './Select';

// // import { Formik } from 'formik';
// import sprite from '../../images/sprite.svg';
// // import Button from '@mui/material/Button';
// // import Switch from '@mui/material/Switch';;
// import { selectIsModalLogoutOpen } from'../../redux/global/globalSelectors.js'

// // import {
// //   Box,
// //   Input,
// //   /*Modal,*/ TextField,
// //   Typography,
// //   MenuItem,
// // } from '@mui/material';
// import Modal from '../Modal/Modal';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Switch } from '../Switch/switch';
// import { string } from 'prop-types';
// import { Label } from 'components/Switch/switch.styled';

// // const style = {
// //   position: 'absolute',
// //   top: '50%',
// //   left: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   width: 400,
// //   bgcolor: 'background.paper',
// //   border: '2px solid #000',
// //   boxShadow: 24,
// //   p: 4,
// // };

// const AddBtnFunction = () => {
//   const [isToggled, setIsToggled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [startDate, setStartDate] = useState(new Date());

//   const [sum, setSum] = useState('');
//   const [category, setCategory] = useState([]);
//   // const [toggleIncome, setToggleIncome] = useState(toggleIncome)
//   // const [toggleExpense, setToggleExpense] = useState('expense')
//   const [name, setName] = useState(''); //  const dispatch = useDispatch();
//   const [comment, setComment] = useState('');
// const dispatch= useDispatch()
//  const isOpen =useSelector(selectIsModalLogoutOpen);

//   const handleOpen = () => {
//     setOpen(true)

//   }
//   const handleClose = () => setOpen(false);
//   const handleChange = () => {
//     //  switch button
//   };
//   const handleCashChange = e => setSum(e.target.value);

//   const handelChangeTextarea = e => {
//     setComment(e.target.value);
//   };
//   const handelSubmit = e => {
//     e.preventDefault();
//     console.log('submit', comment, sum);
//   };
//   // const addTransaction = e => {
//   //   const NewTransaction = {
//   //     id: nanoid(),
//   //     type: true,
//   //     sum,
//   //     category,
//   //     date,
//   //     comment,
//   //   };
//   //   if (sum === '') {
//   //     alert('');
//   //     return;
//   //   }
//   //   setUser(user => [NewTransaction, ...user]);
//   // };

//   // const radioChang = e => {
//   //   const { name, value } = e.currentTarget;
//   //   setName({ [name]: value })
//   // }
//   const handleToggle = () => {
//     setIsToggled(false);
//     console.log('isToggled', isToggled);
//     return;
//   };

//   return (
//     <>
//       <AddBtn onClick={handleOpen}>
//         <AddIcon width="24" height="24">
//           <use href={`${sprite}#icon-plus`} />
//         </AddIcon>
//       </AddBtn>
//       {open && <Modal
//           open={open}
//           onClose={handleClose}
//           style={{
//             width: '320px',
//             height: '600px',
//           }}
//           // value={date}
//         >
//           {/* <ModalContainer> */}

//           {/* <Box sx={style} component="form" onSubmit={handelSubmit}> */}

//           {/* <form action="" onSubmit={handelSubmit} > */}

//           <Form>
//             <LabelTitle htmlFor="">Add transaction</LabelTitle>
//             <ToggleContainer>
//               <Expense>Income</Expense>
//               <Switch isToggled={isToggled} onClick={() => handleToggle()} />
//               <Expense>Expense</Expense>
//             </ToggleContainer>
//             {/* <Switch
//             checked={open}
//             onChange={handleChange}
//             color="primary"
//             value="dynamic-class-name"
//           /> */}
//             {/* <input type="radio" name="income" value="income" id= "income" onChange={radioChang} checked={toggleIncome} />
//            <input type="radio" name="expense" value="expense" id="expense" onChange={radioChang} checked={toggleExpense} />  */}

//             {isToggled && <Select />}
//             <MenuInputs>
//               <ItemInput>
//                 <NumberInput
//                   size="small"
//                   id="filled-number"
//                   type="number"
//                   placeholder="0.00"
//                   // sx={{ color:#E0E0E0', ml:'auto', mr:'auto'}}

//                   // name="sum",
//                   //   value={sum}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="standard"
//                 />
//               </ItemInput>
//               <ItemInput>
//                 {' '}
//                 <Datetime
//                   timeFormat={false}
//                   placeholder='Select a date and time'
//                   // firstDate={startDate(2023)}
//                   // lastDate={startDate(2025)}
//                   inputProps={{
//                     style: {
//                       height: 'auto', width: '270px',
//                       border: 'transparent', borderBottom: '1px solid #E0E0E0', color: 'rgba(0, 0, 0, 1) ',outline:'none'
//                     }
//                   }}
//                   dateFormat="yyyy-MM-DD"
//                   //  ,

//                   // isValidDate={(current) => {
//                   //   let today = new Date()
//                   // return current.isAfter(today)
//                   // }}
//                 />
//               </ItemInput>
//               <ItemInput>
//                 {' '}
//                 <Textarea
//                   value={comment}
//                   onChange={handelChangeTextarea}
//                   name="comment"
//                   rows="3"
//                   placeholder="Comment"
//                 />
//               </ItemInput>
//             </MenuInputs>

//             {/* <Input
//                 onChange={handleCashChange}
//                 type="number"
//                 name="sum"
//                 step="0.1"
//                 value={sum}
//               /> */}

//             {/* <input type="text" name="username" placeholder="Jacob Mercer" /> */}

//             {/* // selected={selectedDate}
//               // onChange={date => setSelectedDate(date)}
//                dateFormat="yyyy-MM-DD"
//               minDate={new Date()}
//               // filterDate={date=> date.getDay()!== 6 && date.getDay()!== 0}

//             //> */}

//             <ul>
//               <ButtonItem>
//                 <AddButton type="submit">ADD</AddButton>
//               </ButtonItem>
//               <ButtonItem>
//                 <ExitButton>Cancel</ExitButton>
//               </ButtonItem>
//             </ul>

//             {/* </form> */}
//           </Form>
//           {/* </Box> */}
//           {/* </ModalContainer> */}
//         </Modal>
//       }
//     </>
//   );
// };
// export default AddBtnFunction;
