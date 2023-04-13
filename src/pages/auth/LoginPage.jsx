import LoginForm from 'components/LoginForm/LoginForm';
import {
    Section,
    PageContainer,
    ImgContainer,
    ImgWrapperLogin,
    Title,
    FormWrapper,
} from './AuthPages.styled';

const LoginPage = () => {
  return (
    <Section>
       <PageContainer>
        <ImgContainer>
            <ImgWrapperLogin />
          <Title>Finance App</Title>
        </ImgContainer>
              <FormWrapper>
                <LoginForm />   
              </FormWrapper>
          </PageContainer>        
     </Section>
  );
};
export default LoginPage;