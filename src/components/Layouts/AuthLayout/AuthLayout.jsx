import Media from 'react-media';
import mediaQueries from '../../../utils/media';
import {
  Section,
  PageContainer,
  ImgContainer,
  Title,
  FormWrapper,
} from './AuthLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthLayout = ({ children, ImgWrapper }) => {
  return (
    <Section>
      <PageContainer>
        <Media queries={mediaQueries}>
          {matches =>
            (matches.tablet || matches.desktop) && (
              <ImgContainer>
                <ImgWrapper />
                <Title>Finance App</Title>
              </ImgContainer>
            )
          }
        </Media>
        <FormWrapper>{children}</FormWrapper>
      </PageContainer>
      <ToastContainer />
    </Section>
  );
};

export default AuthLayout;
