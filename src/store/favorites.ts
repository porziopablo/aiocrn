// vendors
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FavoritesState {
  favoriteEventsIds: string[];
}

const initialState: FavoritesState = {
  favoriteEventsIds: [],
};

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
