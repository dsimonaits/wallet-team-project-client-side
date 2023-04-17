import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global/globalSlice';
import { financeReducer } from './finance/financeSlice';
import { sessionReducer } from './session/sessionSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import countBalanceMiddleware from '../utils/middlewares/countBalanceMiddleware';

const authPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    global: globalReducer,
    session: persistReducer(authPersistConfig, sessionReducer),
    finance: financeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(countBalanceMiddleware),
});

export const persistor = persistStore(store);
