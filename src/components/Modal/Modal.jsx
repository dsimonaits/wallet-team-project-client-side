import Media from 'react-media';
import mediaQueries from '../../utils/media';
import {
  ModalWrapper,
  ModalContent,
  CloseBtnBox,
  CloseButton,
  CloseIcon,
} from './Modal.styled';
import sprite from '../../images/sprite.svg';

export default function Modal({ children }) {
  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <Media queries={mediaQueries}>
            {matches =>
              (matches.tablet || matches.desktop) && (
                <CloseBtnBox>
                  <CloseButton>
                    <CloseIcon width="24" height="24">
                      <use href={`${sprite}#icon-close`} />
                    </CloseIcon>
                  </CloseButton>
                </CloseBtnBox>
              )
            }
          </Media>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
}
