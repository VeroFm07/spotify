import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store/store";
import { createFavorites } from "redux/thunks/favoritesThunk";
import {Favorites} from 'utils/interfaces/Favorite/IFavorite';
import { Item } from "utils/interfaces/Favorite";

export interface favoriteState{
    favorites: Favorites[]
}

const initialState:favoriteState={favorites:[]}


export const favoritesSlice= createSlice({
    name: 'favorites',
    initialState,
    reducers:{
        setFavorites: (state:any, action: PayloadAction<Favorites>)=>{
            state.favorites = action.payload;
        },
        setDeleteFav:(state:favoriteState, action: PayloadAction<{id:string}>)=>{
            const {id}=action.payload;
            return {...state, id}
        },
        setDeleteSuccess:(state:favoriteState, action: PayloadAction<{id:string}>)=>{
            const {id}=action.payload;
            const newState= {...state}
            // newState.favorites=newState.favorites.filter(f=>f.track.id!==id);
            // return newState;
        },
        setCreateFav:(state:favoriteState, action: PayloadAction<{id:string}>)=>{
            const {id}=action.payload;
            return {...state, id}
        },
        setCreateSuccess:(state:favoriteState, action: PayloadAction<{id:string}>)=>{
            const {id}=action.payload;
            const newState= {...state}
            // newState.favorites=newState.favorites.filter(f=>f.track.id!==id);
            return newState;
        },
    },
 
})

export const selectFavoritesInfo=(state: RootState)=> state.favorites;
export const {setFavorites, setDeleteFav, setCreateFav} = favoritesSlice.actions;
export default favoritesSlice.reducer;