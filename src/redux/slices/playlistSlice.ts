import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Tracks} from 'utils/interfaces/Playlist';

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState:{
        playlist: [],
    },
    reducers: {
        setPlaylist: (state:any, action:PayloadAction<Tracks>)=>{
            state.playlist= action.payload;
        }
    }
})

export const {setPlaylist} = playlistSlice.actions;
export default playlistSlice.reducer;