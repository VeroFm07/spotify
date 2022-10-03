import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store/store";
import { createFavorites } from "redux/thunks/favoritesThunk";
import {Favorites} from 'utils/interfaces/Favorite/IFavorite';
import { Item } from "utils/interfaces/Favorite/IFavorite";


export interface FavoriteState {
    favorites: Favorites
}
  
const initialState: FavoriteState = {
    favorites:{href:"",items:[],limit:0,next:null,offset:0,previous:null,total:0}
}

export const favoritesSlice= createSlice({
    name: 'favorites',
    initialState,
    reducers:{
        setFavorites: (state, action: PayloadAction<Favorites>)=>{
            state.favorites= action.payload;
        },
        setDeleteFavSucess:(state, action: PayloadAction<{id:string}>)=>{
            const {id}=action.payload;
            let newArray={...state}
            newArray.favorites.items= newArray.favorites.items.filter(f=>f.track.id !==id)
        },
        setCreateFav:(state, action: PayloadAction<Item>)=>{
            console.log(action.payload, "RECIBE")
            state.favorites.items.push(action.payload)
        },
    },
})

export const selectFavoritesInfo=(state: RootState)=> state.favorites;
export const {setFavorites, setCreateFav, setDeleteFavSucess} = favoritesSlice.actions;
export default favoritesSlice.reducer;