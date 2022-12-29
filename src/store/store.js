import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentIndex: 0,
  isShuffling: false,
  currentSongs: [],
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

    prevSong(state) {
      let newIndex = state.isShuffling
        ? Math.floor(Math.random() * state.currentIndex)
        : state.currentIndex - 1;

      if (newIndex < 0) newIndex = 0;

      playerSlice.caseReducers.setActiveSong(state, {
        payload: state.currentSongs[newIndex],
      });
    },

    nextSong(state) {
      let newIndex = state.isShuffling
        ? state.currentIndex + 1 +
          Math.floor(
            Math.random() * (state.currentSongs.length - state.currentIndex)
          )
        : state.currentIndex + 1;

      if (newIndex === state.currentSongs.length) newIndex--;

      playerSlice.caseReducers.setActiveSong(state, {
        payload: state.currentSongs[newIndex],
      });
    },
  },
});

const store = configureStore({
  reducer: playerSlice.reducer,
});

export const playerSliceActions = playerSlice.actions;
export default store;
