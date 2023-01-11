import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getWorldCharts: builder.query({
      query: () => "charts/world",
    }),
  }),
});

export const { useGetWorldChartsQuery } = shazamCoreApi;
