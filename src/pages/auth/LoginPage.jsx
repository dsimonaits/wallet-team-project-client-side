import LoginForm from 'components/LoginForm/LoginForm';
import Media from 'react-media';
import mediaQueries from '../../utils/media';
import {
  Section,
  PageContainer,
  ImgContainer,
  ImgWrapperLogin,
  Title,
  FormWrapper,
} from './AuthPages.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  return (
    <Section>
      <PageContainer>
        <Media queries={mediaQueries}>
          {matches =>
            (matches.tablet || matches.desktop) && (
              <ImgContainer>
                <ImgWrapperLogin />
                <Title>Finance App</Title>
              </ImgContainer>
            )
          }
        </Media>
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </PageContainer>
      <ToastContainer />
    </Section>
  );
};
export default LoginPage;
