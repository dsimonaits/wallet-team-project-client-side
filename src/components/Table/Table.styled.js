import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  overflow-y: auto;
  height: 350px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 714px;
  }

  @media screen and (min-width: 1280px) {
    width: 725px;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #dcdcdf;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    width: 20px;
    height: 20px;
    background-color: #24cca7;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #ff6596;
    /* box-shadow: 0 0 10px #ff6596; */
  }
`;

export const LoadMoreBtn = styled.button`
  color: #ffffff;
  background-color: #24cca7;
  border: none;
  padding: 4px 12px;
  border-radius: 20px;
  margin: 10px auto;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover {
    /* background-color: #24f0a7; */
    box-shadow: 0 0 8px #24cca7;
  }
`;

// MOBILE ////////////////////////////////////////
export const NoTransactionMob = styled.div`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  padding: 10px;
  text-align: center;
  width: 100%;
`;

export const SpanNoTran = styled.span`
  font-size: 20px;
  color: #bdbdbd;
`;

export const MobileCardWrapper = styled.div`
  width: 280px;
  margin: 0 auto;
`;

export const TransactionList = styled.ul`
  padding: 0;
  background: #ffffff;
  justify-content: center;
  list-style: none;
  border-radius: 10px;
  margin: 8px;
  overflow: hidden;
`;

export const TransactionItem = styled.li`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 5px solid
    ${props => (props.type === 'true' ? '#24cca7' : '#ff6596')};
  cursor: default;
  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }
`;

export const TitleText = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;

export const Text = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  padding-left: 5px;

  .cursor {
    cursor: pointer;
  }
`;

export const TextSum = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: ${props => (props.type === 'true' ? '#24cca7' : '#ff6596')};
`;

export const IconBtnMobile = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

export const EditBtnMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  padding: 4px;
  border-radius: 20px;
  border: none;
  background: none;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out, background 250ms ease-in-out;

  :hover {
    /* background: #24cca7; */
    box-shadow: 0 0 10px #24cca7;
  }
`;

// DESCTOP //////////////////////////////////////////////

export const NoTransaction = styled.div`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.5;
  padding: 10px;
  text-align: center;
  width: 100%;
`;

export const TableWrapper = styled.table`
  padding: 10px;
  border-collapse: collapse;
  max-height: 310px;
  margin: 0 auto;
  table-layout: fixed;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 714px;
  }
`;

export const Thead = styled.thead``;

export const Tr = styled.tr`
  position: relative;
  padding: 10px;
  cursor: default;

  ::after {
    content: ' ';
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 30px;
    z-index: -1;
  }
`;

export const TrWrapperTable = styled.tr`
  padding: 10px;
  /* height: 80px; */
  cursor: default;

  :not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
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
  width: 15%;
`;

export const LargeTh = styled.th`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  padding: 10px;
  text-align: center;
  width: 20%;
`;

export const ThSum = styled.th`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  padding: 10px;
  text-align: right;
  width: 15%;
`;
////////////////////////////////////////////////////////////

export const TbodyWrapper = styled.tbody``;

export const Td = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  text-align: center;
  width: 15%;

  .cursor {
    cursor: pointer;
  }
`;

export const LargeTd = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  text-align: center;
  width: 15%;

  .cursor {
    cursor: pointer;
  }
  width: 20%;
`;

export const TableSum = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  text-align: right;
  color: ${props => (props.type === 'true' ? '#24cca7' : '#ff6596')};
`;

////////////////////////////////////////////////////////

export const TableBtn = styled.td`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 10px 0 10px 10px;
  /* gap: 5px; */
`;

export const IconBtn = styled.img`
  width: 14px;
  height: 14px;
`;

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  background: none;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out, background 250ms ease-in-out;

  :hover {
    box-shadow: 0 0 10px #24cca7;
  }
`;

export const DeleteBtn = styled.button`
  color: #ffffff;
  background-color: #24cca7;
  border: none;
  padding: 4px 12px;
  border-radius: 20px;
  margin: 0 5px;
  cursor: pointer;
  transition: box-shadow 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover {
    box-shadow: 0 0 8px #24cca7;
  }
`;
