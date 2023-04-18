import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteTransaction,
  // loadMoreTransactions,
} from '../../redux/finance/financeOperations';
import {
  // selectIsLoading,
  selectTransactions,
} from '../../redux/finance/financeSelectors';
import EllipsisText from 'react-ellipsis-text';
// import data from './data.json';
import icon from '../../images/pencil.png';
// import Modal from 'components/Modal/Modal';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Edit /////////////////////
import Modal from 'components/Modal/Modal';
import UpdateForm from 'components/UpdateForm/UpdateForm';
import { toggleModalEditTransaction } from '../../redux/global/globalSlice';
import { selectIsModalEditTransactionOpen } from '../../redux/global/globalSelectors';

// STYLE ////////////////////////////////////
import {
  NoTransaction,
  SpanNoTran,
  NoTransactionMob,
  Wrapper,
  // LoadMoreBtn,
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
  LargeTh,
  ThSum,
  Td,
  LargeTd,
  TableSum,
  TableBtn,
  EditBtn,
  IconBtn,
  DeleteBtn,
} from './Table.styled';

// COMPONENT //////////////////////////////////////////////////////

const Table = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [transactionUpdate, setTransactionUpdate] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  // const [currentPage, setCurrentPage] = useState(1);
  // const [isDeleting, setIsDeleting] = useState(false);

  const transactions = useSelector(selectTransactions);
  const isEditModalIsOpen = useSelector(selectIsModalEditTransactionOpen);
  // const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchTransactions());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);
  console.log(transactionUpdate);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  const handleEdit = transactionId => {
    const transaction = transactions.find(({ _id }) => _id === transactionId);
    setTransactionUpdate(transaction);
    toggleModal();
  };

  // // const handleDelete = async rowId => {
  // //   try {
  // //     setIsDeleting(true);
  // //     await dispatch(deleteTransaction(rowId));
  // //   } catch (error) {
  // //     console.log(error);
  // //   } finally {
  // //     setIsDeleting(false);
  // //   }
  // // };

  // const handleDelete = () => {
  //   setIsDeleting(true);
  // };

  // useEffect(() => {
  //   const deleteItem = async () => {
  //     try {
  //       await dispatch(deleteTransaction(transactions._id));
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsDeleting(false);
  //     }
  //   };
  //   if (isDeleting) {
  //     deleteItem();
  //   }
  // }, [isDeleting, dispatch, transactions._id]);

  // Load moer transactions///////////////
  // const handleLoadMore = async () => {
  //   dispatch(loadMoreTransactions(currentPage + 1));
  // };

  const toggleModal = () => {
    // setTransactionUpdate(null);
    dispatch(toggleModalEditTransaction());
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

  // SUM formatter /////////////////////////////////
  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // });

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
        {isEditModalIsOpen && (
          <Modal onClose={toggleModal}>
            {/* {transactionUpdate && transactionUpdate._id === row._id && ( */}
            <UpdateForm
              transactionUpdate={transactionUpdate}
              toggleModal={toggleModal}
            />
            {/* )} */}
          </Modal>
        )}
        <ToastContainer />
        {transactions.length > 0 ? (
          transactions.map(row => (
            <TransactionList key={row._id}>
              <TransactionItem type={row.type.toString()}>
                <TitleText>Date:</TitleText> <Text>{formatDate(row.date)}</Text>
              </TransactionItem>
              <TransactionItem type={row.type.toString()}>
                <TitleText>Type:</TitleText>
                {row.type.toString() === 'true' ? (
                  <Text>+</Text>
                ) : (
                  <Text>-</Text>
                )}
              </TransactionItem>
              <TransactionItem type={row.type.toString()}>
                <TitleText>Category:</TitleText>
                <Text>
                  {row.type.toString() === 'true' ? (
                    <Text>Income</Text>
                  ) : (
                    <Text>{row.category}</Text>
                  )}
                </Text>
              </TransactionItem>
              <TransactionItem type={row.type.toString()}>
                <TitleText>Comment:</TitleText>
                <Text>
                  {row.comment ? (
                    <EllipsisText
                      className="cursor"
                      onClick={() => toggleRow(row._id)}
                      text={row.comment}
                      length={expandedRows[row._id] ? 100 : 15}
                    />
                  ) : (
                    '-'
                  )}
                </Text>
              </TransactionItem>
              <TransactionItem type={row.type.toString()}>
                <TitleText>Sum:</TitleText>
                <TextSum type={row.type.toString()}>
                  {row.sum
                    .toLocaleString('ru-RU', {
                      minimumIntegerDigits: 1,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      useGrouping: true,
                    })
                    .replace(',', '.')}
                </TextSum>
              </TransactionItem>
              <TransactionItem type={row.type.toString()}>
                <DeleteBtn
                  // onClick={handleDelete(row._id)}
                  // disabled={isDeleting}
                  onClick={() => dispatch(deleteTransaction(row._id))}
                >
                  Delete
                  {/* {isLoading ? 'Deleting' : 'Delete'} */}
                  {/* {isDeleting ? 'Deleting' : 'Delete'} */}
                </DeleteBtn>
                <EditBtnMobile onClick={() => handleEdit(row._id)}>
                  <IconBtnMobile src={icon} alt="edit" />
                  Edit
                </EditBtnMobile>
              </TransactionItem>
            </TransactionList>
          ))
        ) : (
          <NoTransactionMob>
            NO TRANSACTIONS <SpanNoTran>(please add transaction)</SpanNoTran>
          </NoTransactionMob>
        )}
      </MobileCardWrapper>
    );
  }

  return (
    <Wrapper>
      {isEditModalIsOpen && (
        <Modal onClose={toggleModal}>
          {/* {transactionUpdate && transactionUpdate._id === row._id && ( */}
          <UpdateForm
            transactionUpdate={transactionUpdate}
            toggleModal={toggleModal}
          />
          {/* )} */}
        </Modal>
      )}
      <ToastContainer />
      <TableWrapper>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <LargeTh>Category</LargeTh>
            <LargeTh>Comment</LargeTh>
            <ThSum>Sum</ThSum>
            <Th></Th>
          </Tr>
        </Thead>

        <TbodyWrapper>
          {transactions.length > 0 ? (
            transactions.map(row => (
              <TrWrapperTable key={row._id}>
                <Td>{formatDate(row.date)}</Td>
                <Td>
                  {row.type.toString() === 'true' ? (
                    <Text>+</Text>
                  ) : (
                    <Text>-</Text>
                  )}
                </Td>
                <LargeTd>
                  {row.type.toString() === 'true' ? (
                    <Text>Income</Text>
                  ) : (
                    <Text>{row.category}</Text>
                  )}
                </LargeTd>
                <LargeTd>
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
                </LargeTd>
                <TableSum type={row.type.toString()}>
                  {/* {formatter.format(row.sum)} */}
                  {row.sum
                    .toLocaleString('ru-RU', {
                      minimumIntegerDigits: 1,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      useGrouping: true,
                    })
                    .replace(',', '.')}
                </TableSum>
                <TableBtn>
                  <EditBtn
                    // onClick={toggleModal}
                    onClick={() => handleEdit(row._id)}
                  >
                    <IconBtn src={icon} alt="edit" />
                  </EditBtn>
                  <DeleteBtn
                    onClick={() => dispatch(deleteTransaction(row._id))}

                    // onClick={handleDelete(row._id)}
                    // disabled={isDeleting}
                  >
                    Delete
                    {/* {isLoading ? 'Deleting' : 'Delete'} */}
                    {/* {isDeleting ? 'Deleting' : 'Delete'} */}
                  </DeleteBtn>
                </TableBtn>
              </TrWrapperTable>
            ))
          ) : (
            <NoTransaction>NO TRANSACTIONS</NoTransaction>
          )}
        </TbodyWrapper>
      </TableWrapper>
      {/* {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        transactions.length > 5 && (
          <LoadMoreBtn onClick={handleLoadMore}>
            Load more transactions...
          </LoadMoreBtn>
        )
      )} */}
    </Wrapper>
  );
};

EllipsisText.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

export default Table;
