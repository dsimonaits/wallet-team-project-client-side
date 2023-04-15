import RegisterForm from '../../components/RegForm/RegForm'
import {
    Section,
    PageContainer,
    ImgContainer,
    ImgWrapperReg,
    Title,
    FormWrapper,
} from './AuthPages.styled';

const LoginPage = () => {
  return (
    <Section>
       <PageContainer>
        <ImgContainer>
            <ImgWrapperReg />
          <Title>Finance App</Title>
        </ImgContainer>
              <FormWrapper>
                 <RegisterForm />   
              </FormWrapper>
          </PageContainer>        
     </Section>
  );
};
export default LoginPage;