import styled from 'styled-components';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

export const WrapperControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media screen and (min-width: 767px) {
    flex-wrap: nowrap;
  }
`;

export const Control = styled(FormControl)``;

export const Selec = styled(Select)`
  border: 1px solid #000000;
  border-radius: 30px;
  height: 50px;
  width: 280px;

  @media screen and (min-width: 767px) {
    width: 160px;
  }
`;
