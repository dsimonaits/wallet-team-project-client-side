import withMediaHOC from 'hoc/reactMediaHOC';
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
  const Media = withMediaHOC({ queries: mediaQueries });
  return (
    <Section>
      <PageContainer>
        <Media>
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
