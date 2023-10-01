import RegisterForm from 'components/Forms/RegForm/RegForm';
import { ImgWrapperReg } from 'components/Layouts/AuthLayout/AuthLayout.styled';
import AuthLayout from 'components/Layouts/AuthLayout/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout ImgWrapper={ImgWrapperReg}>
      <RegisterForm />
    </AuthLayout>
  );
};
export default LoginPage;
