import styled from 'styled-components';
import Datetime from 'react-datetime';

export const Div = styled.div`
  background-color: var(--primary-white-color);
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  // background-color: antiquewhite;
`;
// export const LabelTitle = styled.label`
// font-size:24px;
// font-weight:400;
// margin: 20px 20px 42px 20px;
// color: rgba(0, 0, 0, 1);
// @media screen and (min-width: 768px){
//   margin: 40px 79px 40px 80px;
//   font-size:30px;
// }

//   // background-color: antiquewhite;
// `;
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
  min-width: 280px;
  border: transparent;
  border-bottom: 1px solid #e0e0e0;
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  outline: none;
  @media screen and (min-width: 768px) {
    min-width: 181px;
  }
  /* &:focus {
    border-color:transparent} */
`;

// export const DivNumberCalend = styled.div`
// @media screen and (max-width: 768px){
// display: none;
// }

// `
// export const StyledDatetime = styled(Datetime)`'
// .datetime-wrapper {
//     minWidth: 200px;

//     @media screen and (min-width: 768px) {
//       minWidth: 300px;
//     }
//   }`
export const StyledDatetime = styled(Datetime)`
  input {
    min-width: 280px;
  }
  @media screen and (min-width: 768px) {
    input {
      min-width: 181px;
    }
  }
`;
/* height: auto; */
/* min-width:280px;
border:transparent;
border-bottom: 1px solid #E0E0E0;          
color: rgba(0, 0, 0, 1) ;
outline: none;
@media screen and (min-width: 768px){
min-width:181px;
margin-left:32px;
} */

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
  @media screen and (min-width: 768px) {
    min-width: 394px;
  }
`;

export const AddBtn = styled.button`
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
  bottom: 20px;
  right: 40px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    bottom: 20px;
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
