import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '@fontsource/public-sans';
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
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../components/ThemeChanger/GlobalSyle';
import { lightTheme, darkTheme } from '../../components/ThemeChanger/Theme';
import MainBackground from '../../components/Background/background';
import AddBtnFunction from 'components/AddButtonModal/AddButton';
import DevButton from 'components/DevButton/DevButton';
import TeamModal from 'components/TeamModal/TeamModal';

const DashboardPage = () => {
  const [theme, setTheme] = useState('light');
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  const location = useLocation();

  const onClose = () => {
    setTeamModalOpen(!teamModalOpen);
  };

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <>
      <MainBackground />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header themeToggler={themeToggler} />
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
              <Outlet />
            </HomeTab>
          </DashBoardContainer>
        </Section>
        {location.pathname !== '/diagram' && <AddBtnFunction />}

        <DevButton onClick={onClose} />
        {teamModalOpen && <TeamModal onClose={onClose} />}
      </ThemeProvider>
    </>
  );
};

export default DashboardPage;
