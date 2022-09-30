import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store/store';
import { getPlaylists } from 'redux/thunks/playlistThunk';
import { Item, Playlist } from 'utils/interfaces/Playlist/IPlaylist';

//CREAR THUNK QUE ESTA EN FAVORITES SLICE-COLOCAR LA MISMA LOGICA DEL SETPLAYLIST
export interface playlistState {
    playlist: Item[] //PAYLOAD IGUAL AL ESTADO
}

const initialState: playlistState = { playlist: [] }

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        setPlaylist: (state: any, action: PayloadAction<Array<Item>>) => {
            state.playlist = action.payload;//se coloca en el extrareducer
        },
        
    },
})

export const selectPlaylistInfo = (state: RootState) => state.playlist;//recibe el estado global y devuelve la playlist
export const { setPlaylist} = playlistSlice.actions;
export default playlistSlice.reducer;