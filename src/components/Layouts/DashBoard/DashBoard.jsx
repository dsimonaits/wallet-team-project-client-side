import Section from 'components/Layouts/Section/Section';
import MainBackground from '../../../components/UI/Background/background';
import { DashBoardContainer } from './Dashboard.styled';

const DashBoard = ({ children }) => {
  return (
    <Section>
      <DashBoardContainer>{children}</DashBoardContainer>
      <MainBackground />
    </Section>
  );
};

export default DashBoard;
