import MainTab from 'components/MainTab/MainTab';
import HomeTab from 'components/HomeTab/HomeTab';
import Section from 'components/Section/Section';
import Navigation from 'components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import Media from 'react-media';
import mediaQueries from '../../utils/media';
import Currency from 'components/Currency/Currency';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { LeftBar, DashBoardContainer } from './DashboardPage.styled';
import AddBtnFunction from 'components/AddButtonModal/AddButton';
const DashboardPage = () => {
  return (
    <>
      <Header />
      <Section>
        <DashBoardContainer>
          <MainTab>
            <LeftBar>
              <Navigation />
              <Balance />
            </LeftBar>
            <Media queries={mediaQueries}>
              {matches => (matches.tablet || matches.desktop) && <Currency />}
            </Media>
          </MainTab>
          <HomeTab>
             <AddBtnFunction/>
            <Outlet />
          </HomeTab>
        </DashBoardContainer>
      </Section>
    </>
  );
};

export default DashboardPage;
