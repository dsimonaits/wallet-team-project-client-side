import styled from 'styled-components';
import Eliipse_Grey from '../../images/authicons/ellipse-grey.png';
import Eliipse_Pink from '../../images/authicons/ellipse-pink.png';

export const SectionStyled = styled.section`
  position: relative;
  background-color: rgba(229, 229, 229, 0.4);
  backdrop-filter: blur(25px);
  padding-top: 12px;
  min-height: 640px;

  @media screen and (min-width: 768px) {
    background-image: url(${Eliipse_Grey}), url(${Eliipse_Pink});
    background-repeat: no-repeat;
    background-position: 0px 100%, right top;
  }

  @media screen and (max-width: 1200px) {
    padding-top: 32px;
    background-size: 50%;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 46px;
  }
`;
