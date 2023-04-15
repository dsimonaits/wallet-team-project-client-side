import styled from 'styled-components';
import { Field } from 'formik';
import { ReactComponent as email } from '../../images/formicons/email.svg';
import { ReactComponent as password } from '../../images/formicons/lock.svg';
import { ReactComponent as name } from '../../images/formicons/name.svg';

export const FormContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (min-width: 480px) {
    width: 480px;
    height: auto;
    border-radius: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 533px;
    padding: 40px 58.5px 62px 65px;
    background-color: var(--primary-white-color);
  }
`;
export const Form = styled.form`
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 40px;
  position: relative;
`;

export const IconPassword = styled(password)`
  position: absolute;
  left: 10px;
  top: 4px;
  fill: var(--primary-grey-color);
  transition: fill 200ms linear;
`;

export const IconMail = styled(email)`
  position: absolute;
  left: 10px;
  top: 4px;
  fill: var(--primary-grey-color);
  transition: fill 200ms linear;
`;

export const IconName = styled(name)`
  position: absolute;
  left: 10px;
  top: 4px;
  fill: var(--primary-grey-color);
  transition: fill 200ms linear;
`;

export const FormField = styled(Field)`
  border: none;
  border-bottom: 1px solid var(--primary-grey-color);
  height: 32px;
  outline: none;
  padding-left: 54.5px;
  width: 100%;
  color: #000000;
  &:-webkit-autofill {
    box-shadow: inset 0 0 0 100px var(--primary-white-color);
    -webkit-text-fill-color: var(--primary-text-color);
  }
  &:focus + ${IconPassword}, &:focus + ${IconMail}, &:focus + ${IconName} {
    fill: var(--ascent-text-color);
  }
  ::placeholder {
    color: var(--primary-grey-color);
  }
  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const ErrorText = styled.p`
  position: absolute;
  top: 42px;
  left: 5px;
  font-size: 12px;
  line-height: 1.14;
  color: rgb(240, 0, 0);
`;

export const ErrorTextConfirm = styled(ErrorText)`
  @media screen and (max-width: 350px) {
    width: 135px;
  }
`;

export const StyledBtnMain = styled.button`
  min-width: 300px;
  align-self: center;
  font-family: var(--primary-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: var(--primary-white-color);
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background-color: var(--greenblue);
  padding: 13px 112px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const StyledBtn = styled.button`
  min-width: 300px;
  padding: 13px 98px;
  margin-top: 20px;
  align-self: center;
  font-family: var(--primary-font-family);
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: var(--ascent-text-color);
  cursor: pointer;

  border: 1px solid var(--ascent-text-color);
  border-radius: 20px;
  background-color: var(--primary-white-color);

  transition: var(--transition);

  &:hover {
    box-shadow: -4px 4px 6px 0 rgba(255, 255, 255, 0.5),
      -4px 4px 6px 0 rgba(116, 125, 139, 0.5),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
      inset -4px -4px 6px 0 rgba(0, 0, 0, 0.4);
  }
`;
