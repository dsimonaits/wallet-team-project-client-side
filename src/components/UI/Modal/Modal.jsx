import { useEffect } from 'react';
import withMediaHOC from 'hoc/reactMediaHOC';
import mediaQueries from '../../../utils/media';
import {
  ModalWrapper,
  ModalContent,
  CloseBtnBox,
  CloseButton,
  CloseIcon,
} from './Modal.styled';
import sprite from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
// import {
//   toggleModalLogout,
//   toggleModalAddTransaction,
//   toggleModalEditTransaction,
// } from 'redux/global/globalSlice';

export default function Modal({ onClose, children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const Media = withMediaHOC({ queries: mediaQueries });

  return (
    <>
      <ModalWrapper onClick={handleBackdropClick}>
        <ModalContent>
          <Media>
            {matches =>
              (matches.tablet || matches.desktop) && (
                <CloseBtnBox>
                  <CloseButton type="button" onClick={() => dispatch(onClose)}>
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
