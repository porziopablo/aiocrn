// vendors
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ARTIC_API } from '@env';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: ARTIC_API }),
  endpoints: () => ({}),
});
