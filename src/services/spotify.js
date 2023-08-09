import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem('access_token')}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopArtists: builder.query({
      query: (artistIds) => `artists?ids=${artistIds}`,
    }),

    getSongsByGenre: builder.query({
      query: (genreCode) => `recommendations?seed_genres=${genreCode}&limit=80`,
    }),

    getTopCharts: builder.query({
      query: () => 'recommendations?seed_genres=pop&limit=80&min_popularity=80&max_popularity=100',
    }),

    getSearchedSongs: builder.query({
      query: (searchTerm) =>
        `search?q=${searchTerm}&type=track&limit=5`,
    }),

    getSongDetails: builder.query({
      query: (songId) => `tracks/${songId}`
    }),
    
    getRelatedSongs: builder.query({
      query: (songId) => `recommendations?seed_tracks=${songId}&limit=15`
    }),

    getArtistDetails: builder.query({
      query: (artistId) => `artists/${artistId}`
    }),

    getArtistAlbums: builder.query({
      query: (artistId) => `artists/${artistId}/albums?limit=10`
    }),
  }),
});

export const {
  useGetTopArtistsQuery,
  useGetSongsByGenreQuery,
  useGetTopChartsQuery,
  useGetSearchedSongsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetArtistAlbumsQuery
} = spotifyApi;
