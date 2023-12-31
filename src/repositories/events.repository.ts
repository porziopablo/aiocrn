// store
import { apiSlice } from './index';

// types
import { ArticPaths } from '../types/enums/endpoints.enums';
import { type ArticPageResponse } from '../types/responses/common.responses';
import { type EventResource } from '../types/responses/event.responses';
import { type GetEventsParams } from '../types/requests/event.requests';

export const eventsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query<ArticPageResponse<EventResource>, GetEventsParams>({
      query: (params) => ({ url: ArticPaths.Events, method: 'GET', params }),
    }),
    getEvent: builder.query<EventResource, string>({
      query: (id) => ({ url: `${ArticPaths.Events}/${id}`, method: 'GET' }),
      transformResponse: (response: { data: EventResource }) => response?.data,
    }),
  }),
});

export const { useGetEventsQuery, useGetEventQuery } = eventsApi;
