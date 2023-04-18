import { updateBalance } from '../../redux/session/sessionSlice';

const countBalanceMiddleware = store => next => async action => {
  if (action.type === 'finance/addTransaction/fulfilled') {
    const { balance } = await store.getState().session.user;
    const newBalance =
      (await action.payload.type) === true
        ? balance + parseInt(action.payload.sum)
        : balance - parseInt(action.payload.sum);
    store.dispatch(updateBalance(newBalance));
  }
  if (action.type === 'finance/deleteTransaction/fulfilled') {
    const updatedBalance = action.payload.data.ResponseBody.data.balance;
    // const { balance } = await store.getState().session.user;
    store.dispatch(updateBalance(updatedBalance));
  }
  if (action.type === 'finance/updateTransaction') {
    const updatedBalance = action.payload.data.ResponseBody.data.balance;
    // const { balance } = await store.getState().session.user;
    store.dispatch(updateBalance(updatedBalance));
  }

  return next(action);
};

export default countBalanceMiddleware;
