// import * as React from 'react';
import styled from '@emotion/styled';
import { AddBtn } from './AddButton.styled';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { nanoid } from 'nanoid';

import {
  Form,
  ModalContainer,
  AddIcon,
  LabelTitle,
  Expense,
  ToggleContainer,
  NumberInput,
  MenuInputs,
  ItemInput,
  Textarea,
  ExitButton,
  AddButton,
  ButtonItem
} from './AddButton.styled';
import { Select } from './Select';

// import { Formik } from 'formik';
import sprite from '../../images/sprite.svg';
// import Button from '@mui/material/Button';
// import Switch from '@mui/material/Switch';;
import { selectIsModalLogoutOpen } from'../../redux/global/globalSelectors.js'

import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from '../Switch/switch';
import { string } from 'prop-types';
import { Label } from 'components/Switch/switch.styled';
import {toggleModalAddTransaction} from '../../redux/global/globalSlice'
import {selectIsModalAddTransactionOpen}from '../../redux/global/globalSelectors'
import { addTransaction} from '../../redux/finance/financeSlice'

const AddBtnFunction = () => {
  
  const [startDate, setStartDate] = useState(new Date());

  const [sum, setSum] = useState('');
  const [category, setCategory] = useState([]);
  
  
  const [comment, setComment] = useState('');
  const dispatch = useDispatch()

  const isAddModalIsOpen = useSelector(selectIsModalAddTransactionOpen);

  // const handleOpen = () => dispatch(isModalAddTransactionOpen());
  // const handleClose = () => setOpen(false);
  const handleChange = () => {
    //  switch button
  };
  const handleCashChange = e => setSum(e.target.value);

  const handelChangeTextarea = e => {
    setComment(e.target.value);

  };
  const handelSubmit = e => {
    e.preventDefault();
  addTransaction()
  }
  
   const addTransaction = e => {
    const NewTransaction = {
      id: nanoid(),
      // type,
      sum:setSum,
      category,
      date:setStartDate,
      comment:setComment,
     };
     console.log('NewTransaction',NewTransaction)
    if (sum === '') {
      alert('jmm');
      return;
    }
    dispatch(addTransaction(NewTransaction))
  };

  return (
    <>
      <AddBtn onClick={() => dispatch(toggleModalAddTransaction())}>
        <AddIcon width="24" height="24">
          <use href={`${sprite}#icon-plus`} />
        </AddIcon>
      </AddBtn>
      {isAddModalIsOpen && < Modal
       
        onClose={() => dispatch(!toggleModalAddTransaction())}
        style={{
          width: '320px',
          height: '600px',
        }}
      // value={date}
      >
        

        <Form onSubmit={handelSubmit}>
          <LabelTitle htmlFor="">Add transaction</LabelTitle>
          <ToggleContainer>
            <Expense>Income</Expense>
            <Switch onClick={() => dispatch(!toggleModalAddTransaction())}*/ />
            <Expense>Expense</Expense>
          </ToggleContainer>
       
          <Select />
         
          <MenuInputs>
            <ItemInput>
              <NumberInput
                size="small"
                id="filled-number"
                type="number"
                placeholder="0.00"
                // sx={{ color:#E0E0E0', ml:'auto', mr:'auto'}}

                // name="sum",
                //   value={sum}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </ItemInput>
            <ItemInput>
              {' '}
              <Datetime
                timeFormat={false}
                placeholder='Select a date and time'
                // firstDate={startDate(2023)}
                // lastDate={startDate(2025)}
                inputProps={{
                  style: {
                    height: 'auto', width: '270px',
                    border: 'transparent', borderBottom: '1px solid #E0E0E0', color: 'rgba(0, 0, 0, 1) ', outline: 'none'
                  }
                }}
                dateFormat="yyyy-MM-DD"
              //  ,
                  
              // isValidDate={(current) => {
              //   let today = new Date()
              // return current.isAfter(today)
              // }}
              />
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

          {/* <Input
                onChange={handleCashChange}
                type="number"
                name="sum"
                step="0.1"
                value={sum}
              /> */}

          {/* <input type="text" name="username" placeholder="Jacob Mercer" /> */}

          {/* // selected={selectedDate}
              // onChange={date => setSelectedDate(date)}
               dateFormat="yyyy-MM-DD"
              minDate={new Date()}
              // filterDate={date=> date.getDay()!== 6 && date.getDay()!== 0}
            
            //> */}

          <ul>
            <ButtonItem>
              <AddButton type="submit">ADD</AddButton>
            </ButtonItem>
            <ButtonItem>
              <ExitButton type='button'>Cancel</ExitButton>
            </ButtonItem>
          </ul>

          {/* </form> */}
        </Form>
        {/* </Box> */}
        {/* </ModalContainer> */}
      </Modal >}
      
    </>
  );
};
export default AddBtnFunction;

