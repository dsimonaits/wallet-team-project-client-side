import LoginForm from 'components/Forms/LoginForm/LoginForm';
import { ImgWrapperLogin } from 'components/Layouts/AuthLayout/AuthLayout.styled';
import AuthLayout from 'components/Layouts/AuthLayout/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout ImgWrapper={ImgWrapperLogin}>
      <LoginForm />
    </AuthLayout>
  );
};
export default LoginPage;
