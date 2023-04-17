import RegisterForm from '../../components/RegForm/RegForm'
import Media from 'react-media';
import mediaQueries from '../../utils/media';
import {
    Section,
    PageContainer,
    ImgContainer,
    ImgWrapperReg,
    Title,
    FormWrapper,
} from './AuthPages.styled';

const RegistrationPage = () => {
  return (
    <Section>
      <PageContainer>
         <Media queries={mediaQueries}>
              {matches => (matches.tablet || matches.desktop) &&  <ImgContainer>
            <ImgWrapperReg />
          <Title>Finance App</Title>
        </ImgContainer>}
            </Media>     
              <FormWrapper>
                 <RegisterForm />   
              </FormWrapper>
          </PageContainer>        
     </Section>
  );
};
export default RegistrationPage;