import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchTransactions,
  deleteTransaction,
} from '../../redux/finance/financeOperations';
import {
  selectIsLoading,
  selectTransactions,
} from '../../redux/finance/financeSelectors';
import EllipsisText from 'react-ellipsis-text';
// import data from './data.json';
import icon from '../../images/pencil.png';
// import Modal from 'components/Modal/Modal';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// STYLE ////////////////////////////////////
import {
  Wrapper,
  MobileCardWrapper,
  TransactionList,
  TransactionItem,
  TitleText,
  Text,
  TextSum,
  EditBtnMobile,
  IconBtnMobile,
  TableWrapper,
  TbodyWrapper,
  Thead,
  Tr,
  TrWrapperTable,
  Th,
  ThSum,
  Td,
  TableSum,
  TableBtn,
  EditBtn,
  IconBtn,
  DeleteBtn,
} from './Table.styled';

// COMPONENT //////////////////////////////////////////////////////

const Table = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [transactionUpdate, setTransactionUpdate] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});

  console.log(transactionUpdate);

  const isLoading = useSelector(selectIsLoading);
  const transactions = useSelector(selectTransactions);
  console.log(transactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
  // console.log(data);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleEdit = transactionId => {
    const transaction = transactions.find(({ id }) => id === transactionId);
    setTransactionUpdate(transaction);
  };

  // const closeForm = () => {
  //   setTransactionUpdate(null);
  // };

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

  // TOGGLE for comment //////////////////////////////////
  function toggleRow(rowId) {
    setExpandedRows({
      ...expandedRows,
      [rowId]: !expandedRows[rowId],
    });
  }

  // MOBILE ///////////////////////////////////////////////////////

  if (isMobile) {
    return (

      <MobileCardWrapper>
        <ToastContainer />
        {transactions.map(row => (
          <TransactionList key={row._id}>
            <TransactionItem type={row.type.toString()}>
              <TitleText>Date:</TitleText> <Text>{formatDate(row.date)}</Text>
            </TransactionItem>
            <TransactionItem type={row.type.toString()}>
              <TitleText>Type:</TitleText>
              {row.type.toString() === 'true' ? <Text>+</Text> : <Text>-</Text>}
            </TransactionItem>
            <TransactionItem type={row.type.toString()}>
              <TitleText>Category:</TitleText> <Text>{row.category}</Text>
            </TransactionItem>
            <TransactionItem type={row.type.toString()}>
              <TitleText>Comment:</TitleText>
              <Text>
                {row.comment ? (
                  <EllipsisText
                    className="cursor"
                    onClick={() => toggleRow(row._id)}
                    text={row.comment}
                    length={expandedRows[row._id] ? 100 : 20}
                  />
                ) : (
                  '-'
                )}
              </Text>
            </TransactionItem>
            <TransactionItem type={row.type.toString()}>
              <TitleText>Sum:</TitleText>
              <TextSum type={row.type.toString()}>
                {Number.isInteger(row.sum) ? row.sum.toFixed(2) : row.sum}
              </TextSum>
            </TransactionItem>
            <TransactionItem type={row.type.toString()}>
              <DeleteBtn onClick={() => dispatch(deleteTransaction(row._id))}>
                {isLoading ? 'Deleting' : 'Delete'}
              </DeleteBtn>
              <EditBtnMobile onClick={() => handleEdit(row._id)}>
                <IconBtnMobile src={icon} alt="edit" />
                Edit
              </EditBtnMobile>
            </TransactionItem>
          </TransactionList>
        ))}
      </MobileCardWrapper>
         );
       
  }

  return (
    <Wrapper>
      <ToastContainer />

      <TableWrapper>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Comment</Th>
            <ThSum>Sum</ThSum>
            <Th></Th>
          </Tr>
        </Thead>
        <TbodyWrapper>
          {transactions.map(row => (
            <TrWrapperTable key={row._id}>
              {/* <Modal>
                {transactionUpdate && transactionUpdate.id === row._id && (
                  <UpdateForm
                    contactUpdate={transactionUpdate}
                    closeForm={closeForm}
                  />
                )}
              </Modal> */}
              <Td>{formatDate(row.date)}</Td>
              <Td>
                {row.type.toString() === 'true' ? (
                  <Text>+</Text>
                ) : (
                  <Text>-</Text>
                )}
              </Td>
              <Td>{row.category}</Td>
              <Td>
                {row.comment ? (
                  <EllipsisText
                    className="cursor"
                    onClick={() => toggleRow(row._id)}
                    text={row.comment}
                    length={expandedRows[row._id] ? 100 : 20}
                  />
                ) : (
                  '-'
                )}
              </Td>
              <TableSum type={row.type.toString()}>
                {Number.isInteger(row.sum) ? row.sum.toFixed(2) : row.sum}
              </TableSum>
              <TableBtn>
                <EditBtn onClick={() => handleEdit(row._id)}>
                  <IconBtn src={icon} alt="edit" />
                </EditBtn>
                <DeleteBtn onClick={() => dispatch(deleteTransaction(row._id))}>
                  {isLoading ? 'Deleting' : 'Delete'}
                </DeleteBtn>
              </TableBtn>
            </TrWrapperTable>
          ))}
        </TbodyWrapper>
      </TableWrapper>
        </Wrapper>
       
  );
};

EllipsisText.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

export default Table
