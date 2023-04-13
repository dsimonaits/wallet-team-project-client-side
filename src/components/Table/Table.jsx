import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTransactions,
  deleteTransaction,
} from '../../redux/finance/financeOperations';
import {
  // selectIsLoading,
  selectTransactions,
} from '../../redux/finance/financeSelectors';
import EllipsisText from 'react-ellipsis-text';
import data from './data.json';
import icon from '../../images/pencil.png';

// STYLE ////////////////////////////////////
import {
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
  // const [transactionUpdate, setTransactionUpdate] = useState(null);
  // const [data, setData] = useState([]);

  // const isLoading = useSelector(selectIsLoading);
  const transactions = useSelector(selectTransactions);

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

  const handleEdit = id => {
    // update
  };

  const handleDelete = id => {
    //   // update
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

  // MOBILE ///////////////////////////////////////////////////////
  if (isMobile) {
    return (
      <MobileCardWrapper>
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
                  <EllipsisText text={row.comment} length={20} />
                ) : (
                  '-'
                )}
              </Text>
            </TransactionItem>
            <TransactionItem type={row.type.toString()}>
              <TitleText>Sum:</TitleText>
              <TextSum type={row.type.toString()}>{row.sum}</TextSum>
            </TransactionItem>
            <TransactionItem type={row.type.toString()}>
              <DeleteBtn onClick={() => dispatch(deleteTransaction(row._id))}>
                {/* {isLoading ? 'Deleting' : 'Delete'} */}
              </DeleteBtn>
              {/* <DeleteBtn onClick={() => handleDelete(row.id)}>Delete</DeleteBtn> */}
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
    <>
      <TableWrapper>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Category</Th>
            <Th>Comment</Th>
            <Th>Sum</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <TbodyWrapper>
          {transactions.map(row => (
            <TrWrapperTable key={row._id}>
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
                  <EllipsisText text={row.comment} length={25} />
                ) : (
                  '-'
                )}
              </Td>
              <TableSum type={row.type.toString()}>{row.sum}</TableSum>
              <TableBtn>
                <EditBtn onClick={() => handleEdit(row._id)}>
                  <IconBtn src={icon} alt="edit" />
                </EditBtn>
                <DeleteBtn onClick={() => dispatch(deleteTransaction(row._id))}>
                  {/* {isLoading ? 'Deleting' : 'Delete'} */}
                </DeleteBtn>
                {/* <DeleteBtn onClick={() => handleDelete(row._id)}>
                  Delete
                </DeleteBtn> */}
              </TableBtn>
            </TrWrapperTable>
          ))}
        </TbodyWrapper>
      </TableWrapper>
    </>
  );
};

EllipsisText.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

export default Table;
