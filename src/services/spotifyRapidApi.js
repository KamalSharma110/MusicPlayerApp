import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyRapidApi = createApi({
  reducerPath: "spotifyRapidApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "8687aad68cmsh68a2c535dcda472p199339jsne35acd458307"
      );
      headers.set("X-RapidAPI-Host", "spotify23.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongLyrics: builder.query({
      query: (songId) => `track_lyrics/?id=${songId}`,
    }),

    getArtistBio: builder.query({
      query: (artistId) => `artist_overview/?id=${artistId}`,
    }),
  }),
});

export const {
 useGetArtistBioQuery,
 useGetSongLyricsQuery
} = spotifyRapidApi;
