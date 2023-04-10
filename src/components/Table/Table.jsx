import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import EllipsisText from 'react-ellipsis-text';
import data from './data.json';
import icon from './pencil.png';

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

const Table = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // const [data, setData] = useState([]);

  useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const response = await axios.get(
    //         'https://wallet-team-project-hg8k.onrender.com/transactions'
    //       );
    //       setData(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   fetchData();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // console.log(data);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleEdit = id => {
    // update
  };

  const handleDelete = id => {
    // delete
  };

  if (isMobile) {
    return (
      <MobileCardWrapper>
        {data.transactions.map(row => (
          <TransactionList key={row.id}>
            <TransactionItem type={row.type}>
              <TitleText>Date:</TitleText> <Text>{row.date}</Text>
            </TransactionItem>
            <TransactionItem type={row.type}>
              <TitleText>Type:</TitleText> <Text>{row.type}</Text>
            </TransactionItem>
            <TransactionItem type={row.type}>
              <TitleText>Category:</TitleText> <Text>{row.category}</Text>
            </TransactionItem>
            <TransactionItem type={row.type}>
              <TitleText>Comment:</TitleText>
              <Text>
                <EllipsisText text={row.comment} length={'15'} />
              </Text>
            </TransactionItem>
            <TransactionItem type={row.type}>
              <TitleText>Sum:</TitleText>{' '}
              <TextSum type={row.type}>{row.sum}</TextSum>
            </TransactionItem>
            <TransactionItem type={row.type}>
              <DeleteBtn onClick={() => handleDelete(row.id)}>Delete</DeleteBtn>
              <EditBtnMobile onClick={() => handleEdit(row.id)}>
                <IconBtnMobile src={icon} alt="" />
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
          {data.transactions.map(row => (
            <TrWrapperTable key={row.id}>
              <Td>{row.date}</Td>
              <Td>{row.type}</Td>
              <Td>{row.category}</Td>
              <Td>
                <EllipsisText text={row.comment} length={'25'} />
              </Td>
              <TableSum type={row.type}>{row.sum}</TableSum>
              <TableBtn>
                <EditBtn onClick={() => handleEdit(row.id)}>
                  <IconBtn src={icon} alt="" />
                </EditBtn>
                <DeleteBtn onClick={() => handleDelete(row.id)}>
                  Delete
                </DeleteBtn>
              </TableBtn>
            </TrWrapperTable>
          ))}
        </TbodyWrapper>
      </TableWrapper>
    </>
  );
};

export default Table;
