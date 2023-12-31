// vendors
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FavoritesState {
  favoriteEventsIds: string[];
}

const initialState: FavoritesState = {
  favoriteEventsIds: [],
};

/**
 * Note: a real app would store favs in a DB, but since this is
 * a demo app, the data will be persisted locally using redux-persist.
 *
 * If an API to fetch and modify the user's favs existed, the add and remove
 * actions would become mutations inside the events.repository.ts file. And
 * the redux-persist implementation could be removed.
 */
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteEventsIds.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteEventsIds = state.favoriteEventsIds.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice;
