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
                  
              </FormWrapper>
          </PageContainer>        
     </Section>
  );
};
export default LoginPage;