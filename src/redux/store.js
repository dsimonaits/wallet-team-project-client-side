import { configureStore } from '@reduxjs/toolkit';
import { globalReducer } from './global/globalSlice';
<<<<<<< HEAD
import { transactionsReducer } from './statistic/statisticSlice';
=======
import { financeReducer } from './finance/financeSlice';
>>>>>>> 4dd761f3a6a0b58c39309057c862a00f7d11ddca
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const authPersistConfig = {
//   key: "session",
//   storage,
//   whitelist: ["token"],
// };

export const store = configureStore({
  reducer: {
    global: globalReducer,
    transactions: transactionsReducer,
    // session: persistReducer(authPersistConfig, "sessionReducer"),
    finance: financeReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


// export const persistor = persistStore(store);
