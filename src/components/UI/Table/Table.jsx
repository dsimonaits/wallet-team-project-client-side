import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// import { deleteTransaction } from '../../redux/finance/financeOperations';
import { selectTransactions } from '../../../redux/finance/financeSelectors';
import EllipsisText from 'react-ellipsis-text';

import icon from '../../../images/pencil.png';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Edit/Delete /////////////////////
import Modal from 'components/UI/Modal/Modal';
import UpdateForm from 'components/Forms/UpdateForm/UpdateForm';
import ModalDelete from 'components/UI/ModalDelete/ModalDelete';
// import { toggleModalDeleteTransaction } from '../../redux/global/globalSlice';
import { toggleModalEditTransaction } from '../../../redux/global/globalSlice';
import { toggleModalDeleteTransaction } from '../../../redux/global/globalSlice';
import { selectIsModalEditTransactionOpen } from '../../../redux/global/globalSelectors';
import { selectIsModalDeleteTransactionOpen } from '../../../redux/global/globalSelectors';

// STYLE ////////////////////////////////////
import {
  NoTransaction,
  SpanNoTranDes,
  SpanNoTran,
  NoTransactionMob,
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
  LargeTh,
  ThSum,
  Td,
  LargeTd,
  TableSum,
  TableBtn,
  EditBtn,
  IconBtn,
  DeleteBtn,
  GifContainer,
} from './Table.styled';

// COMPONENT //////////////////////////////////////////////////////

const Table = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [transactionUpdate, setTransactionUpdate] = useState(null);
  const [transactionDelete, setTransactionDelete] = useState(null);

  const [expandedRows, setExpandedRows] = useState({});

  const transactions = useSelector(selectTransactions);
  const isEditModalIsOpen = useSelector(selectIsModalEditTransactionOpen);
  const isDeleteModalIsOpen = useSelector(selectIsModalDeleteTransactionOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  const handleDelete = transactionId => {
    const transaction = transactions.find(({ _id }) => _id === transactionId);
    setTransactionDelete(transaction);
    toggleModalDel();
  };

  const handleEdit = transactionId => {
    const transaction = transactions.find(({ _id }) => _id === transactionId);
    setTransactionUpdate(transaction);
    toggleModal();
  };

  const toggleModal = () => {
    dispatch(toggleModalEditTransaction());
  };

  const toggleModalDel = () => {
    dispatch(toggleModalDeleteTransaction());
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
            <UpdateForm
              transactionUpdate={transactionUpdate}
              toggleModal={toggleModal}
            />
          </Modal>
        )}
        {isDeleteModalIsOpen && (
          <Modal onClose={toggleModalDel}>
            <ModalDelete
              transactionDelete={transactionDelete}
              toggleModal={toggleModalDel}
            />
          </Modal>
        )}
        <ToastContainer />
        {transactions.length > 0 ? (
          transactions.map(row => (
            <TransactionList key={row._id}>
              {/* <TransactionItem row={row} /> */}
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
                  // onClick={() => dispatch(toggleModalDel())}
                  // onClick={() => dispatch(deleteTransaction(row._id))}
                  onClick={() => handleDelete(row._id)}
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
          <>
            <NoTransactionMob>NO TRANSACTIONS</NoTransactionMob>
            <SpanNoTran>(please add transaction)</SpanNoTran>
            <GifContainer>
              <img
                width="280px"
                src="https://i.gifer.com/YmvJ.gif"
                alt="Animated GIF"
              />
            </GifContainer>
          </>
        )}
      </MobileCardWrapper>
    );
  }

  return (
    <Wrapper>
      {isEditModalIsOpen && (
        <Modal onClose={toggleModal}>
          <UpdateForm
            transactionUpdate={transactionUpdate}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
      {isDeleteModalIsOpen && (
        <Modal onClose={toggleModalDel}>
          <ModalDelete
            transactionDelete={transactionDelete}
            toggleModal={toggleModalDel}
          />
        </Modal>
      )}
      {/* <ToastContainer /> */}
      {transactions.length > 0 ? (
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
                  <EditBtn onClick={() => handleEdit(row._id)}>
                    <IconBtn src={icon} alt="edit" />
                  </EditBtn>
                  <DeleteBtn
                    // onClick={() => dispatch(toggleModalDel())}
                    // onClick={() => dispatch(deleteTransaction(row._id))}
                    onClick={() => handleDelete(row._id)}
                  >
                    Delete
                    {/* {isLoading ? 'Deleting' : 'Delete'} */}
                    {/* {isDeleting ? 'Deleting' : 'Delete'} */}
                  </DeleteBtn>
                </TableBtn>
              </TrWrapperTable>
            ))}
          </TbodyWrapper>
        </TableWrapper>
      ) : (
        <>
          <NoTransaction>NO TRANSACTIONS</NoTransaction>
          <SpanNoTranDes>(please add transaction)</SpanNoTranDes>
          <GifContainer>
            <img
              width="300px"
              src="https://i.gifer.com/YmvJ.gif"
              alt="Animated GIF"
            />
          </GifContainer>
        </>
      )}
    </Wrapper>
  );
};

EllipsisText.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

export default Table;
