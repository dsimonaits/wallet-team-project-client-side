import styled from 'styled-components';

export const Div = styled.div`
  background-color: var(--primary-white-color);
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
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

export const Expense = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-right: 20px;
  margin-left: 20px;
  color: ${props => props.theme.expense};
  /* color:${props =>
    props.type === 'false' ? '#E0E0E0' : 'rgba(255, 255, 255, 1)'}  */
`;
export const Income = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-right: 20px;
  margin-left: 20px;
  color: ${props => props.theme.income};
`;

export const NumberInput = styled.input`
  min-width: 270px;
  border: transparent;
  border-bottom: 1px solid #e0e0e0;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
  /* &:focus {
    border-color:transparent} */
`;
export const Select = styled.select`
  min-width: 270px;
  border: transparent;
  border-bottom: 1px solid #e0e0e0;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
`;
export const MenuInputs = styled.ul`
  list-style: none;
  padding-left: 0px;
`;
export const ItemInput = styled.li`
  margin-bottom: 40px;
  padding: 0 20px;
`;
export const Textarea = styled.textarea`
  min-width: 270px;
  border: transparent;
  border-bottom: 1px solid #e0e0e0;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
`;
export const ToggleContainer = styled.div`
  display: flex;
  margin-bottom: 42px;
`;
export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  //padding:20px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  font-weight: 100;
  border: 1px solid #ffffff;
  background-color: rgba(36, 204, 167, 1);
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;

  transition: box-shadow 250ms ease-in-out, background 250ms ease-in-out;

  :hover {
    /* background: #24cca7; */
    box-shadow: 0 0 10px #24cca7;
  }
`;
export const CloseButton = styled.button`
  height: fit-content;
  padding: unset;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const AddIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
export const MenuBtn = styled.ul`
  list-style: none;
  padding-left: 0px;
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

  background-color: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-size: 18px;
  margin-bottom: 20px;
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
  color: #ffff;

  background-color: #24cca7;
  border: 1px solid #4a56e2;
  border-radius: 20px;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const ButtonItem = styled.li`
  margin-bottom: 20px;
`;
/* gvhjbkkkkkkkkkkkkkkkkkkkkk */

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  /* border-radius:40%; */
  /* background-color: green; */
`;
// export const AddIconToggle = styled.svg`
//   width: 20px;
//   height: 20px;
// `;
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
    background-color: rgba(36, 204, 167, 1);
    /* color:rgba(255, 255, 255, 1);  */
    font-size: 30px;
    font-weight: 100;
    border: 1px solid #ffffff;
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
export const Span = styled.span``;
