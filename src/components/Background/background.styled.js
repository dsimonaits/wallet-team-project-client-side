import styled from 'styled-components';
import Eliipse_Grey from '../../images/authicons/ellipse-grey.png';
import Eliipse_Pink from '../../images/authicons/ellipse-pink.png';

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 720px;
  background-color: rgba(229, 229, 229, 0.4);

  @media screen and (min-width: 768px) {
    background-image: url(${Eliipse_Grey}), url(${Eliipse_Pink});
    background-repeat: no-repeat;
    background-position: 0px 100%, right top;
    filter: blur(25px);
  }
`;
