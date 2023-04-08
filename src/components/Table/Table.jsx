// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import EllipsisText from 'react-ellipsis-text';
import data from './data.json';
import icon from './pencil.png';

import {
  TableWrapper,
  TbodyWrapper,
  Thead,
  Tr,
  Th,
  Td,
  TableSum,
  TableBtn,
  EditBtn,
  DeleteBtn,
} from './Table.styled';

const Table = () => {
  // const [data, setData] = useState([]);

  // useEffect(async () => {
  //   axios.get('./data.json').then(response => {
  //     setData(response.data);
  //   });
  // }, []);
  console.log(data.transactions);

  const handleEdit = id => {
    // Обработка редактирования записи с указанным ID
  };

  const handleDelete = id => {
    // Обработка удаления записи с указанным ID
  };

  return (
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
          <Tr key={row.id}>
            <Td>{row.date}</Td>
            <Td>{row.type}</Td>
            <Td>{row.category}</Td>
            <Td>
              <EllipsisText text={row.comment} length={'25'} />
            </Td>
            <TableSum type={row.type}>{row.sum}</TableSum>
            <TableBtn>
              <EditBtn onClick={() => handleEdit(row.id)}>
                <img src={icon} alt="" />
              </EditBtn>
              <DeleteBtn onClick={() => handleDelete(row.id)}>Delete</DeleteBtn>
            </TableBtn>
          </Tr>
        ))}
      </TbodyWrapper>
    </TableWrapper>
  );
};

export default Table;
