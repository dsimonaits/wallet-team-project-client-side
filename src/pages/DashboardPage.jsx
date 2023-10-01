import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '@fontsource/public-sans';
import MainTab from 'components/Layouts/MainTab/MainTab';
import HomeTab from 'components/Layouts/HomeTab/HomeTab';
import Navigation from 'components/Layouts/Navigation/Navigation';
import Balance from '../components/UI/Balance/Balance';
import Media from 'react-media';
import mediaQueries from '../utils/media';
import Currency from 'components/UI/Currency/Currency';
import { Outlet } from 'react-router-dom';
import Header from 'components/Layouts/Header/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../components/UI/ThemeChanger/GlobalStyle';
import { lightTheme, darkTheme } from '../components/UI/ThemeChanger/Theme';
import AddBtnFunction from 'components/UI/AddButtonModal/AddButton';
import DevButton from 'components/UI/DevButton/DevButton';
import TeamModal from 'components/UI/TeamModal/TeamModal';
import DashBoard from 'components/Layouts/DashBoard/DashBoard';
import LeftBar from 'components/Layouts/LeftBar/LeftBar';

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
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header themeToggler={themeToggler} />
        <DashBoard>
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
        </DashBoard>
        {location.pathname !== '/diagram' && <AddBtnFunction />}
        <DevButton onClick={onClose} />
        {teamModalOpen && <TeamModal onClose={onClose} />}
      </ThemeProvider>
    </>
  );
};

export default DashboardPage;
