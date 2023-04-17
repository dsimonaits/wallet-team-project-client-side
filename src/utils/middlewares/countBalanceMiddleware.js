import { updateBalance } from '../../redux/session/sessionSlice';

const countBalanceMiddleware = store => next => action => {
  if (action.type === 'finance/addTransaction/fulfilled') {
    const { balance } = store.getState().session.user;
    console.log(action.payload);
    const newBalance =
      action.payload.type === 'income'
        ? balance + action.payload.sum
        : balance - action.payload.sum;
    store.dispatch(updateBalance(newBalance));
  }

  return next(action);
};

export default countBalanceMiddleware;
