import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import { usersSlice } from './users/users-reducer';
import storage from 'redux-persist/lib/storage';

const usersPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['data', 'filter'],
};

export const store = configureStore({
  reducer: { users: persistReducer(usersPersistConfig, usersSlice.reducer) },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV === 'development',
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
