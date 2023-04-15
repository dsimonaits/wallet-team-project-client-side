import styled from 'styled-components';
import { ReactComponent as EyeShow } from 'images/formicons/eye-password-show.svg';
import { ReactComponent as EyeHide } from 'images/formicons/eye-password-hide.svg';

export const BtnIcon = styled.button`
  position: absolute;
  padding: 7px 7px;
  right: 0;
  top: -3px;
  background: transparent;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    right: 0;
    top: 0;
  }
`;

export const ButtonShow = styled(EyeShow)`
  fill: var(--primary-grey-color);
`;

export const ButtonHide = styled(EyeHide)`
  fill: var(--primary-grey-color);
`;
