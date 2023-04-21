import styled from 'styled-components';
import Datetime from 'react-datetime';

export const Div = styled.div`
  background-color: var(--primary-white-color);
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;
export const LabelTitle = styled.label`
  font-size: 24px;
  font-weight: 400;
  margin: 20px 20px 40px 20px;
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

export const Expense = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0 11px;
  cursor: pointer;

  color: ${props => props.theme.expense};
`;
export const Income = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0 11px;
  color: ${props => props.theme.income};

  cursor: pointer;
`;

export const DivRelative = styled.div`
  position: relative;
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

export const NumberInput = styled.input`
  border: transparent;
  border-bottom: 1px solid var(--secondary-grey-light);
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
  /* &:focus {
    border-color:transparent} */

  @media screen and (max-width: 768px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 181px;
    text-align: center;
  }
`;
export const Select = styled.select`
  /* width: 394px; */
  border: transparent;
  border-bottom: 1px solid var(--secondary-grey-light);
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 394px;
  }
`;
export const MenuInputs = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const ItemInput = styled.div`
  margin-bottom: 40px;
  padding: 0 20px;
`;
export const Textarea = styled.textarea`
  width: 394px;
  border: transparent;
  border-bottom: 1px solid var(--secondary-grey-light);
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
  resize: none;
  height: 30px;

  @media screen and (max-width: 768px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 394px;
  }
`;
export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  width: 100%;
`;

export const CloseButton = styled.button`
  height: fit-content;
  padding: unset;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

// export const AddIcon = styled.svg`
//   width: 20px;
//   height: 20px;
// `;
export const MenuBtn = styled.ul`
  list-style: none;
  padding-left: 0px;
`;
export const ExitButton = styled.button`
  width: 300px;
  padding-top: 13px;
  padding-left: 61px;
  padding-bottom: 13px;
  padding-right: 55px;
  background-color: var(--primary-white-color);
  cursor: pointer;
  border: 1px solid var(--ascent-text-color);
  border-radius: 20px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.5;
  color: var(--ascent-text-color);
  transition: var(--transition);
  &:hover,
  &:focus {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const AddButton = styled.button`
  width: 300px;
  padding: 13px 100px;
  background-color: var(--greenblue);
  cursor: pointer;
  border: none;
  border-radius: 20px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 1.5;
  color: var(--primary-white-color);

  transition: var(--transition);
  &:hover,
  &:focus {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const ButtonItem = styled.li`
  height: 50px;
  margin-bottom: 20px;
`;

export const LabelEdit = styled.label`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
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
    background-image: url('../../images/Plusbtn.png');
    position: absolute;
    width: 44px;
    height: 44px;
    top: -3px;
    border-radius: 50%;
    background-color: rgba(36, 204, 167, 1);
    /* color:rgba(255, 255, 255, 1);  */
    font-size: 30px;
    font-weight: 100;
    border: 1px solid var(--primary-white-color);
    background-color: rgba(36, 204, 167, 1);
    transition-property: background-color, transform;
    transition-duration: 500ms;
  }
`;

/* &:before{
    content:`${props}`
  } */
export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    /* background: green; */

    &:before {
      transform: translateX(40px);
      background-color: rgba(255, 101, 150, 1);
    }
  }
`;
export const SpanSlash = styled.span`
  color: var(--secondary-grey-light);
`;
