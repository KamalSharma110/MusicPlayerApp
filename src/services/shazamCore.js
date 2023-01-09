import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1/",
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

    getChartsByGenre: builder.query({
      query: (genreCode) => `charts/genre-world?genre_code=${genreCode}`,
    }),

    getChartsByCountry: builder.query({
      query: (countryCode) => `charts/country?country_code=${countryCode}`,
    }),

    getSearchedSongs: builder.query({
      query: (searchTerm) =>
        `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),

    getSongDetails: builder.query({
      query: (songId) => `tracks/details?track_id=${songId}`
    }),

    getRelatedSongs: builder.query({
      query: (songId) => `tracks/related?track_id=${songId}`
    }),
  }),
});

export const {
  useGetWorldChartsQuery,
  useGetChartsByGenreQuery,
  useGetChartsByCountryQuery,
  useGetSearchedSongsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery
} = shazamCoreApi;
