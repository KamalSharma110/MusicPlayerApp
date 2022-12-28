import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    isPlaying: false,
    currentSongs: [],
    activeSong: {},
};

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers:{
        playPause(state){
            state.isPlaying = !state.isPlaying;
        },

        setActiveSong(state, action){
            if(state.activeSong === action.payload) return;
            state.activeSong = action.payload;
            state.isPlaying = true;
        },

        setCurrentSongs(state, action){
            state.currentSongs = action.payload;
        }
    }
});

const store = configureStore({
    reducer: playerSlice.reducer
});

export const playerSliceActions = playerSlice.actions;
export default store;