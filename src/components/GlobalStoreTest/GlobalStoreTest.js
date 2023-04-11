import { useDispatch, useSelector } from 'react-redux';
import {
  toggleIsLoading,
  toggleModalAddTransaction,
  toggleModalEditTransaction,
  toggleModalLogout,
} from '../../redux/global/globalSlice';
import {
  selectIsLoading,
  selectIsModalAddTransactionOpen,
  selectIsModalEditTransactionOpen,
  selectIsModalLogoutOpen,
} from '../../redux/global/globalSelectors';

const GlobalStoreTest = () => {
  const dispatch = useDispatch();
  const handelLoading = () => dispatch(toggleIsLoading());
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  const handelModalAddTransaction = () => dispatch(toggleModalAddTransaction());
  const ModalAddTransaction = useSelector(selectIsModalAddTransactionOpen);
  console.log(isLoading);

  const handelModalEditTransaction = () =>
    dispatch(toggleModalEditTransaction());
  const ModalEditTransaction = useSelector(selectIsModalEditTransactionOpen);
  console.log(isLoading);

  const handelModalLogout = () => dispatch(toggleModalLogout());
  const ModalLogout = useSelector(selectIsModalLogoutOpen);
  console.log(isLoading);

  return (
    <>
      <div>
        <button onClick={handelLoading}>Loading button</button>
        <p>{`Is loading: ${isLoading}`}</p>
      </div>
      <div>
        <button onClick={handelModalLogout}>ModalLogout</button>
        <p>{`ModalLogout: ${ModalLogout}`}</p>
      </div>
      <div>
        <button onClick={handelModalAddTransaction}>ModalAddTransaction</button>
        <p>{`ModalAddTransaction: ${ModalAddTransaction}`}</p>
      </div>
      <div>
        <button onClick={handelModalEditTransaction}>
          ModalEditTransaction
        </button>
        <p>{`ModalEditTransaction: ${ModalEditTransaction}`}</p>
      </div>
    </>
  );
};

export default GlobalStoreTest;
