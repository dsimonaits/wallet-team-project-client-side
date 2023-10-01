import RegisterForm from 'components/Forms/RegForm/RegForm';
import { ImgWrapperReg } from 'components/Layouts/AuthLayout/AuthLayout.styled';
import AuthLayout from 'components/Layouts/AuthLayout/AuthLayout';

const RegistrationPage = () => {
  return (
    <AuthLayout ImgWrapper={ImgWrapperReg}>
      <RegisterForm />
    </AuthLayout>
  );
};
export default RegistrationPage;
