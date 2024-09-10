import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiRtkQuery = createApi({
  reducerPath: 'apiRtkQuery',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),

  endpoints: (builder) => ({}),
});
