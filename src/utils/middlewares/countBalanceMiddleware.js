import { updateBalance } from '../../redux/session/sessionSlice';

const countBalanceMiddleware = store => next => async action => {
  if (action.type === 'finance/addTransaction/fulfilled') {
    console.log(action.payload);
    const { balance } = await store.getState().session.user;
    console.log(balance);
    const newBalance =
      (await action.payload.type) === true
        ? balance + parseInt(action.payload.sum)
        : balance - parseInt(action.payload.sum);
    console.log(newBalance);

    store.dispatch(updateBalance(newBalance));
  }

  return next(action);
};

export default countBalanceMiddleware;
