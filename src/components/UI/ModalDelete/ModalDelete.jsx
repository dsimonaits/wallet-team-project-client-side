import mediaQueries from '../../../utils/media';
import Media from 'react-media';
import {
  CancelButton,
  ExitButton,
  LogoContainer,
  ModalContainer,
  TextWrapper,
  TextQ,
  InfoWrapper,
  Legend,
  Text,
  SpanBold,
} from './ModalDelete.styled';
import Modal from 'components/UI/Modal/Modal';
import Logo from 'components/UI/Logo/Logo';
import { useDispatch } from 'react-redux';
import { toggleModalDeleteTransaction } from 'redux/global/globalSlice';
import { toggleIsLoading } from 'redux/global/globalSlice';
import { deleteTransaction } from '../../../redux/finance/financeOperations';

const ModalDelete = ({ transactionDelete }) => {
  const { type, date, sum, _id, category } = transactionDelete;

  const dispatch = useDispatch();

  const deleteTr = id => {
    dispatch(deleteTransaction(id));

    dispatch(toggleModalDeleteTransaction());
    dispatch(toggleIsLoading());
  };

  const onClose = () => {
    dispatch(toggleModalDeleteTransaction());
  };

  // DATE formatter ///////////////////////////////////////
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}.${
      month < 10 ? '0' : ''
    }${month}.${year}`;
  }

  return (
    <>
      <Modal onClose={onClose}>
        <ModalContainer>
          <LogoContainer>
            <Media queries={mediaQueries}>
              {matches => matches.mobile && <Logo />}
            </Media>
          </LogoContainer>
          <TextWrapper>
            <TextQ>Are you sure you want to delete this transaction?</TextQ>
            <InfoWrapper>
              <Legend>Transaction - {type ? 'income' : 'withdrawal'}</Legend>
              <Text>
                Date: <SpanBold> {formatDate(date)}</SpanBold>
              </Text>
              <Text>
                Category:
                <SpanBold>{type ? ' "Income" ' : ` "${category}" `}</SpanBold>
              </Text>
              <Text>
                Amount:
                <SpanBold>
                  {sum
                    .toLocaleString('ru-RU', {
                      minimumIntegerDigits: 1,
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                      useGrouping: true,
                    })
                    .replace(',', '.')}
                </SpanBold>
              </Text>
            </InfoWrapper>
          </TextWrapper>
          <ExitButton type="button" onClick={() => deleteTr(_id)}>
            Yes
          </ExitButton>
          <CancelButton
            type="button"
            onClick={() => dispatch(toggleModalDeleteTransaction())}
          >
            No
          </CancelButton>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalDelete;
