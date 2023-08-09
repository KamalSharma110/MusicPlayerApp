import { createSlice, configureStore } from "@reduxjs/toolkit";
import { spotifyApi } from "../services/spotify";
import { setSongs } from "../utils/utils";
import { spotifyRapidApi } from "../services/spotifyRapidApi";

const initialState = {
  isPlaying: false,
  currentIndex: 0,
  isShuffling: false,
  isWidgetActive: false,
  currentSongs: [],
  widgetSongs: [],
  activeSong: {},
  artistIds: '',
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playPause(state) {
      state.isPlaying = !state.isPlaying;
    },

    toggleShuffling(state) {
      state.isShuffling = !state.isShuffling;
    },

    setActiveSong(state, action) {
      document.getElementById("player").style.display = "flex";
      document.getElementsByTagName('body')[0].style.paddingBottom = '100px';
      state.activeSong = action.payload;
      state.currentIndex = action.payload.index;
      state.isPlaying = true;
    },

    setCurrentSongs(state, action) {
      state.currentSongs = setSongs(action.payload);
    },

    setWidgetSongs(state, action) {
      state.widgetSongs = setSongs(action.payload)?.slice(0, 5);
    },

    toggleWidgetActive(state, action) {
      state.isWidgetActive = action.payload;
    },

    prevSong(state) {
      const songs = state.isWidgetActive
        ? state.widgetSongs
        : state.currentSongs;

      let newIndex = state.isShuffling
        ? Math.floor(Math.random() * state.currentIndex)
        : state.currentIndex - 1;

      if (newIndex < 0) newIndex = 0;

      playerSlice.caseReducers.setActiveSong(state, {
        payload: songs[newIndex],
      });
    },

    nextSong(state) {
      const songs = state.isWidgetActive
        ? state.widgetSongs
        : state.currentSongs;

      let newIndex = state.isShuffling
        ? state.currentIndex +
          1 +
          Math.floor(Math.random() * (songs.length - state.currentIndex))
        : state.currentIndex + 1;

      if (newIndex >= songs.length) newIndex = songs.length - 1;

      playerSlice.caseReducers.setActiveSong(state, {
        payload: songs[newIndex],
      });
    },

    setArtistIds(state, action){
      state.artistIds = action.payload?.substring(0, action.payload.length - 1);
    }
  },
});

const store = configureStore({
  reducer: {
    [spotifyApi.reducerPath]: spotifyApi.reducer,
    [spotifyRapidApi.reducerPath]: spotifyRapidApi.reducer,
    player: playerSlice.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(spotifyApi.middleware, spotifyRapidApi.middleware),
});

export const playerSliceActions = playerSlice.actions;
export default store;
