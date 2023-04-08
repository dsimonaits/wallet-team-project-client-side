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
  // const [data, setData] = useState([]);

  // useEffect(() => {
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
  // }, []);
  // console.log(data);

  const handleEdit = id => {
    // update
  };

  const handleDelete = id => {
    // delete
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
              <DeleteBtn onClick={() => handleDelete(row.id)}>Delete</DeleteBtn>
            </TableBtn>
          </TrWrapperTable>
        ))}
      </TbodyWrapper>
    </TableWrapper>
  );
};

export default Table;
