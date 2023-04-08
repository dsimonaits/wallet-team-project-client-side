import styled from 'styled-components';

export const TableWrapper = styled.table`
  padding: 10px;
  border-collapse: collapse;
  /* background-color: #1212; */
  width: 715px;
  height: 306px;
  margin: 0 auto;
`;

export const Thead = styled.thead`
  background: #ffffff;
  border-radius: 20px;
`;

export const Tr = styled.tr`
  padding: 10px;
`;

export const TrWrapperTable = styled.tr`
  padding: 10px;
  :not(:last-child) {
    border-bottom: 2px solid #dcdcdf;
  }
`;

export const Th = styled.th`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  padding: 10px;
  text-align: center;
`;

export const TbodyWrapper = styled.tbody``;

export const Td = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  text-align: center;
`;

export const TableSum = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;

  color: ${props => (props.type === '-' ? '#ff6596' : '#24cca7')};
`;

export const TableBtn = styled.td`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const DeleteBtn = styled.button`
  color: #ffffff;
  background-color: #24cca7;
  border: none;
  padding: 4px 12px;
  border-radius: 20px;
  margin: 0 5px;
  cursor: pointer;
`;

export const EditBtn = styled.button`
  border: none;
  background: none;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;
