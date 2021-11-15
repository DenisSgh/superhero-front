import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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
import heroesReducer from './heroes/heroesReducer';

const persistConfig = {
  key: 'heroes',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    heroes: persistReducer(persistConfig, heroesReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development', //Allows devtools only during development
});

export const persistor = persistStore(store);
