import styled from 'styled-components';
import Datetime from 'react-datetime';
// import DateRangeIcon from '@mui/icons-material/DateRange';

export const Select = styled.select`
  /* border:0; */
  appearance: none;
  border: transparent;
  border-bottom: 1px solid #e0e0e0;
  /* margin-bottom:44px; */
  box-shadow: 0;
  color: black;
  font-size: 18px;
  outline: none;
  min-width: 280px;
  width: 100%;
  margin-bottom: 40px;
  background-color: rgba(255, 255, 255, 1);
  cursor: pointer;
  &:focus {
    /* color:red; */
    background-color: var(--primary-white-color);
    border-bottom: 2px solid var(--greenblue);
  }
  @media screen and (min-width: 768px) {
    min-width: 394px;
    width: 100%;
  }
`;
export const SelectConteiner = styled.div`
  /* background-color:red;  */
  width: 280px;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
  /* box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(25px);
border-radius: 20px; */
`;
export const Option = styled.option`
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  width: 40px;
  margin-bottom: 44px;
  &:focus {
    color: black;
    background-color: blue;
    border-bottom: 2px solid var(--greenblue);
  }
`;
export const Div = styled.div`
  background-color: var(--primary-white-color);
`;
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  // background-color: antiquewhite;
`;

export const LabelTitle = styled.label`
  font-size: 24px;
  font-weight: 400;
  margin: 20px 20px 42px 20px;
  color: rgba(0, 0, 0, 1);
`;
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;
  width: 320px;
  height: auto;
`;

export const NumberInput = styled.input`
  border: transparent;
  border-bottom: 1px solid var(--secondary-grey-light);
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
  &:focus {
    border-bottom: 2px solid var(--greenblue);
  }
  @media screen and (max-width: 768px) {
    min-width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 181px;
    text-align: center;
  }

  /* &:focus {
    border-color:transparent} */
`;
export const StyledDatetime = styled(Datetime)`
  &:focus {
    border-bottom: 2px solid var(--greenblue);
  }
  @media screen and (max-width: 768px) {
    input {
      min-width: 280px;
      position: relative;
    }
  }
  @media screen and (min-width: 768px) {
    input {
      position: relative;
      width: 181px;
      text-align: center;
    }
  }
`;
// export const CalendarIcon = styled.svg`
// color:#4A56E2;
// `
export const DivRelative = styled.div`
  position: relative;
`;
export const ItemCalendarNumber = styled.li`
  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
`;
// export const Dateicon = styled(StyledDatetime)`
// width: 18px;
// height: 20px;
// position: absolute;
// `

export const MenuCalendarNumber = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const MenuInputs = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0;
`;
export const ItemInput = styled.li`
  width: auto;
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;
export const Textarea = styled.textarea`
  min-width: 270px;
  border: transparent;
  border-bottom: 1px solid #e0e0e0;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
  &:focus {
    border-bottom: 2px solid var(--greenblue);
  }
  @media screen and (min-width: 768px) {
    min-width: 394px;
  }
`;

export const AddBtn = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  //padding:20px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  font-weight: 100;
  border: 1px solid var(--primary-white-color);
  background-color: rgba(36, 204, 167, 1);
  position: absolute;
  bottom: 20px;
  right: 40px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    bottom: 20px;
  }

  transition: box-shadow 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover {
    /* background-color: #24f0a7; */
    box-shadow: 0 0 8px #24cca7;
  }
`;

export const CloseButton = styled.button`
  height: fit-content;
  padding: unset;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AddIconBtn = styled.svg`
  width: 20px;
  height: 20px;
`;

export const ExitButton = styled.button`
  width: 300px;
  height: 50px;
  padding: 13px;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
  background-color: var(--primary-white-color);
  border: 1px solid var(--ascent-text-color);
  border-radius: 20px;
  font-size: 18px;
  transition: box-shadow 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover {
    /* background-color: #24f0a7; */
    box-shadow: 0 0 8px #24cca7;
  }
`;
export const AddButton = styled.button`
  width: 300px;
  height: 50px;
  padding: 13px;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary-white-color);
  background-color: var(--greenblue);
  border: 1px solid var(--ascent-text-color);
  border-radius: 20px;
  font-size: 18px;
  transition: box-shadow 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover {
    /* background-color: #24f0a7; */
    box-shadow: 0 0 8px #24cca7;
  }
`;
export const MenuBtn = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 40px 0 0;
  @media screen and (min-width: 768px) {
    margin: 41px 0 0;
  }
`;
export const ButtonItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
/* toggle */

export const ToggleContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 42px;
  }
`;
export const Expense = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-left: 24px;
  color: ${props => props.theme.expense};
  /* color:${props =>
    props.type === 'false' ? '#E0E0E0' : 'rgba(255, 255, 255, 1)'}  */
`;
export const Income = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-right: 24px;
  /* margin-left:20px; */
  color: ${props => props.theme.income};
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 32px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: solid 1px rgba(224, 224, 224, 1);
  background-color: transparent;
  &:before {
    content: '';
    position: absolute;
    width: 44px;
    height: 44px;
    top: -3px;
    border-radius: 50%;
    font-size: 30px;
    font-weight: 100;
    border: 1px solid #ffffff;
    background-color: var(--greenblue);
    transition-property: background-color, transform;
    transition-duration: 500ms;
    background-image: url('data:image/svg+xml;utf8,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0V20" stroke="white" stroke-width="2"/>
<path d="M0 10L20 10" stroke="white" stroke-width="2"/>
</svg>');
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    /* background: green; */

    &:before {
      transform: translateX(40px);
      background-image: url('data:image/svg+xml;utf8,<svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1L20 0.999999" stroke="white" stroke-width="2"/></svg>');
      background-repeat: no-repeat;
      background-size: 30px;
      background-position: center;
      background-color: var(--pink);
    }
  }
`;
