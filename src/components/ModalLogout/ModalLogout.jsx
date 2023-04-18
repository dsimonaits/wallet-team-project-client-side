import mediaQueries from '../../utils/media';
import Media from 'react-media';
import {
  CancelButton,
  ExitButton,
  LogoContainer,
  ModalContainer,
  Text,
} from './ModalLogout.styled';
import Modal from 'components/Modal/Modal';
import Logo from 'components/Logo/Logo';
import { useDispatch } from 'react-redux';
import { toggleModalLogout } from 'redux/global/globalSlice';
import { toggleIsLoading } from 'redux/global/globalSlice';
import { logOut } from 'redux/session/sessionOperations';
// import { logOut } from '../../redux/session/session-operations'

export default function ModalLogout() {
  const dispatch = useDispatch();

  const userLogOut = () => {
    dispatch(logOut());
    dispatch(toggleModalLogout());
    dispatch(toggleIsLoading());
  };

  const onClose = () => {
    dispatch(toggleModalLogout());
  };

  return (
    <>
      <Modal onClose={onClose}>
        <ModalContainer>
          <LogoContainer>
            <Media queries={mediaQueries}>
              {matches => matches.mobile && <Logo />}
            </Media>
          </LogoContainer>
          <Text>Are you sure you want to exit?</Text>
          <ExitButton type="button" onClick={() => dispatch(userLogOut)}>
            Exit
          </ExitButton>
          <CancelButton
            type="button"
            onClick={() => dispatch(toggleModalLogout())}
          >
            Cancel
          </CancelButton>
        </ModalContainer>
      </Modal>
    </>
  );
}
