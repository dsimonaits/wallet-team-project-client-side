import styled from 'styled-components';
import Eliipse_Grey from '../../images/authicons/ellipse-grey.png';
import Eliipse_Pink from '../../images/authicons/ellipse-pink.png';

export const SectionStyled = styled.section`
  background-color: var(--background-color);
  backdrop-filter: blur(25px);
  padding-top: 12px;
  min-height: 100vh;

  background-image: url(${Eliipse_Grey}), url(${Eliipse_Pink});
  background-repeat: no-repeat;
  background-position: 0px 100%, right top;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    height: 100vh;
  }

  @media screen and (min-width: 1279px) {
    padding-top: 46px;
  }
`;
