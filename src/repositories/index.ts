// vendors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { ARTIC_API } from '@env';

// components
import { showToast } from '../components/Toast/Toast';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: ARTIC_API }),
  endpoints: () => ({}),
});

export const apiErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.error(action?.payload || action);
    const payload = action?.payload as any;
    const description = payload?.data?.detail || action?.error?.message;
    showToast({ type: 'error', description });
  }

  return next(action);
};
