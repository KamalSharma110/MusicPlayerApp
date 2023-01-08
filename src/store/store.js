import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentIndex: 0,
  isShuffling: false,
  isWidgetActive: false,
  currentSongs: [],
  widgetSongs: [],
  activeSong: {},
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
      state.activeSong = action.payload;
      state.currentIndex = action.payload.index;
      state.isPlaying = true;
    },

    setCurrentSongs(state, action) {
      state.currentSongs = action.payload;
    },

    setWidgetSongs(state, action) {
      state.widgetSongs = action.payload;
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

      while (
        newIndex >= 0 &&
        !songs.at(newIndex)?.hub?.actions?.at(1).uri
      )
        newIndex--;

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

      while (
        newIndex < songs.length &&
        !songs.at(newIndex)?.hub?.actions?.at(1).uri
      )
        newIndex++;

      if (newIndex >= songs.length) newIndex = songs.length - 1;

      playerSlice.caseReducers.setActiveSong(state, {
        payload: songs[newIndex],
      });
    },
  },
});

const store = configureStore({
  reducer: playerSlice.reducer,
});

export const playerSliceActions = playerSlice.actions;
export default store;
