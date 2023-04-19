import styled from 'styled-components';

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
