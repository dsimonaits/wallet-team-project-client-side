import styled from 'styled-components';
import { Field } from 'formik';
import { ReactComponent as email } from '../../images/formicons/email.svg';
import { ReactComponent as password } from '../../images/formicons/lock.svg';
import { ReactComponent as name } from '../../images/formicons/name.svg';

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: var(--primary-white-color);
  @media screen and (min-width:768px) {
    width: 533px;
    padding: 40px 58.5px 62px 65px;
  }
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   padding-top: 107px;
   @media screen and (min-width: 768px) {
   padding-top: 40px;
  }
`;

export const FormLabel = styled.label`
   position: relative;
   display: block;
   margin-bottom: 40px; 
`;

export const IconPassword = styled(password)`
    position: absolute;
    top: 3px;
    left: 10px;
    background-color: transparent;   
    fill: var(--secondary-grey-light);
    transition: var(--transition);
`;

export const IconMail = styled(email)`
  position: absolute;
  left: 10px;
  top: 4px;
  fill: var(--secondary-grey-light);
  transition: var(--transition);
`;

export const IconName = styled(name)`
  position: absolute;
  left: 10px;
  top: 4px;
  fill: var(--secondary-grey-light);
  transition: var(--transition);
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 32px;
  padding-left: 54.5px;
  border: none;
  border-bottom: 1px solid var(--primary-grey-color);
  outline: none;
  color: #000000;
  &:-webkit-autofill {
    box-shadow: inset 0 0 0 100px var(--primary-white-color);
    -webkit-text-fill-color: var(--primary-text-color);
  }
  &:focus {
     border-bottom: 2px solid var(--greenblue);  
  }  
  &:focus + ${IconPassword}, &:focus + ${IconMail}, &:focus + ${IconName} {
    fill: var(--greenblue);     
  }
  ::placeholder {
    font-size: 18px;
    line-height: 1.5;
    color: var(--primary-grey-color);
  }

  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 65px;
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 25px;
  left: 15px;
  font-size: 12px;
  line-height: 1.5;
  color: rgb(240, 0, 0);
`;

export const ErrorTextConfirm = styled(ErrorText)`
  @media screen and (max-width: 320px) {
    width: 135px;
  }
`;

export const FirstButton = styled.button`
   min-width: 280px;
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

export const SecondButton = styled.button`
   min-width: 280px;
   padding-top: 13px;
   padding-left: 61px;
   padding-bottom: 13px;
   padding-right: 55px;
   margin-top: 20px;

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
