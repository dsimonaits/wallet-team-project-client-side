import styled from 'styled-components';

export const HeadList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 58px;
  background: #ffffff;
  border-radius: 30px;
  margin-bottom: 14px;
`;

export const HeadCat = styled.li`
  font-family: var(--primary-font-family);

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;

export const List = styled.ul`
  margin-bottom: 14px;
`;

export const Item = styled.li`
  border-bottom: 1px solid #dcdcdf;
  display: flex;
  padding: 10px;
`;

export const SubList = styled.ul`
  & :not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const SubItem = styled.p`
  font-family: var(--primary-font-family);
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;
export const Elem = styled.p`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const Sum = styled.p`
  margin-left: auto;
  font-family: var(--primary-font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;

export const Category = styled.p`
  font-family: var(--primary-font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--primary-text-color);
`;

export const SubListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Type = styled.p`
  margin-left: auto;
  color: ${props => (props.expenses ? 'red' : 'green')};
`;
