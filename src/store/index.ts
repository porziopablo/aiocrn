// vendors
import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// slices
import { apiSlice, apiErrorLogger } from '../repositories';
import favoritesSlice from './favorites';
import userSettingsSlice from './userSettings';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// check notes in src/store/favorites.ts & src/store/userSettings.ts
const persistedFavoritesReducer = persistReducer(persistConfig, favoritesSlice.reducer);
const persistedUserSettingsReducer = persistReducer(persistConfig, userSettingsSlice.reducer);

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    favorites: persistedFavoritesReducer,
    userSettings: persistedUserSettingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(apiSlice.middleware)
      .concat(apiErrorLogger),
});

export const persistor = persistStore(store);

// infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
