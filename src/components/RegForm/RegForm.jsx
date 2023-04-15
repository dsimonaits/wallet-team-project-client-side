import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import Logo from 'components/Logo/Logo';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import ShowPwdButton from 'components/ShowPwdButton/ShowPwdButton';
import {
  FormContainer,
  Form,
  FormField,
  FormLabel,
  LogoContainer,
  ErrorText,
  IconMail,
  IconPassword,
  IconName,
  ErrorTextConfirm,
  StyledBtnMain,
  StyledBtn,
} from 'components/LoginForm/LoginForm.styled';
import { toast } from 'react-toastify';

import operations from 'redux/session/sessionOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

   const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(6, 'must be at least 6 characters')
      .max(12, 'password length must be less than 12 characters')
           .required(),
     name: yup
    .string()
    .min(1, 'must min length 1')
    .max(12, 'must max length 12')
    .required(),      
   });    
    
    
  const onSubmit = (values, { resetForm }) => {
    const { email, password, name } = values;
    const res = dispatch(operations.register({ email, password, name }));

    if (res.error && res.payload === 409) {
      toast.error(`was registered before`);
      return;
    } else if (res.error) {
      toast.error('Something went wrong! Please, try again');
      return;
    }

    resetForm();
  };

  return (
    <FormContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
              <LogoContainer>
                <Logo />
              </LogoContainer>
            <FormLabel>
              <FormField
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="E-mail"
              />
              <IconMail />
              <ErrorMessage
                name="email"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
            <FormLabel>
              <FormField
                type={isRevealPwd ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                onInput={evt => setPassword(evt.target.value)}
              />
              <IconPassword />
              <ShowPwdButton
                type="button"
                setShowPassword={setIsRevealPwd}
                showPassword={isRevealPwd}
              />

              <ErrorMessage
                name="password"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>

            <FormLabel>
              <FormField
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
              <IconPassword />
              <ShowPwdButton
                type="button"
                setShowPassword={setConfirmShowPassword}
                showPassword={showConfirmPassword}
              />

              <PasswordStrengthMeter password={password} />
              <ErrorMessage
                name="confirmPassword"
                render={msg => <ErrorTextConfirm>{msg}</ErrorTextConfirm>}
              />
            </FormLabel>
            <FormLabel>
              <FormField
                type="text"
                name="name"
                value={values.username}
                onChange={handleChange}
                placeholder="First name"
              />
              <IconName />
              <ErrorMessage
                name="name"
                render={msg => <ErrorText>{msg}</ErrorText>}
              />
            </FormLabel>
             <StyledBtnMain type="submit">
                Register
              </StyledBtnMain>            
              <StyledBtn
                type="button"
                onClick={() => {
                  navigate('/login');
                }}
              >
                Log In
              </StyledBtn>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
