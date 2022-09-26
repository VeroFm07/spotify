import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Favorites, Track} from 'utils/interfaces/Favorite/IFavorite';

export const favoritesSlice= createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers:{
        setFavorites: (state:any, action: PayloadAction<Favorites>)=>{
            state.favorites = action.payload;
        }
    }
})

export const {setFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;