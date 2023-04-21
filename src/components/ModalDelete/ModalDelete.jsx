import mediaQueries from '../../utils/media';
import Media from 'react-media';
import {
  CancelButton,
  ExitButton,
  LogoContainer,
  ModalContainer,
  Text,
} from './ModalDelete.styled';
import Modal from 'components/Modal/Modal';
import Logo from 'components/Logo/Logo';
import { useDispatch } from 'react-redux';
import { toggleModalDeleteTransaction } from 'redux/global/globalSlice';
import { toggleIsLoading } from 'redux/global/globalSlice';
// import { logOut } from 'redux/session/sessionOperations';
import { deleteTransaction } from '../../redux/finance/financeOperations';

const ModalDelete = ({ transactionDelete }) => {
  const dispatch = useDispatch();

  const deleteTr = id => {
    dispatch(deleteTransaction(id));

    dispatch(toggleModalDeleteTransaction());
    dispatch(toggleIsLoading());
  };

  const onClose = () => {
    dispatch(toggleModalDeleteTransaction());
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
          <Text>Are you sure you want to delete?</Text>
          <ExitButton
            type="button"
            onClick={() => deleteTr(transactionDelete._id)}
          >
            Delete
          </ExitButton>
          <CancelButton
            type="button"
            onClick={() => dispatch(toggleModalDeleteTransaction())}
          >
            Cancel
          </CancelButton>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalDelete;
