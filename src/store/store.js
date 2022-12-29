import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentIndex: 0,
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

    setActiveSong(state, action) {
      state.activeSong = action.payload;
      state.currentIndex = action.payload.index;
      state.isPlaying = true;
    },

    setCurrentSongs(state, action) {
      state.currentSongs = action.payload;
    },

    prevSong(state) {
      playerSlice.caseReducers.setActiveSong(state, {
        ...state.currentSongs[state.currentIndex - 1],
        index: state.currentIndex - 1,
      });
    },

    nextSong(state) {
      playerSlice.caseReducers.setActiveSong(state, {
        ...state.currentSongs[state.currentIndex + 1],
        index: state.currentIndex + 1,
      });
    },
  },
});

const store = configureStore({
  reducer: playerSlice.reducer,
});

export const playerSliceActions = playerSlice.actions;
export default store;
