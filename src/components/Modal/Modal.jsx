import { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import {
  toggleModalLogout,
  toggleModalAddTransaction,
  toggleModalEditTransaction,
} from 'redux/global/globalSlice';

export default function Modal({ children }) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleModalLogout());
    dispatch(toggleModalAddTransaction());
    dispatch(toggleModalEditTransaction());
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <>
      <ModalWrapper onClick={handleBackdropClick}>
        <ModalContent>
          <Media queries={mediaQueries}>
            {matches =>
              (matches.tablet || matches.desktop) && (
                <CloseBtnBox>
                  <CloseButton
                    type="button"
                    onClick={() => dispatch(closeModal())}
                  >
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
