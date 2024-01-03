// vendors
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import i18n from '../locales';

export interface UserSettingsState {
  language: string;
  loading?: boolean;
}

const initialState: UserSettingsState = {
  language: 'en',
  loading: false,
};

export const setLanguage = createAsyncThunk(
  'userSettings/setLanguage',
  async (params: { language: string }) => {
    await i18n.changeLanguage(params.language);
    return params.language;
  },
);

/**
 * Note: a real app would store user data in a DB, but since this is
 * a demo app, the data will be persisted locally using redux-persist.
 *
 * If an API to fetch and modify the user's data existed, the add and remove
 * actions would become mutations inside the user.repository.ts file. And
 * the redux-persist implementation could be removed.
 */
const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setLanguage.fulfilled, (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      state.loading = false;
    });

    builder.addCase(setLanguage.rejected, (state) => {
      state.language = initialState.language;
      state.loading = false;
    });

    builder.addCase(setLanguage.pending, (state) => {
      state.loading = true;
    });
  },
});

export default userSettingsSlice;
