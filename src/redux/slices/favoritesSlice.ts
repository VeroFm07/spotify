import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store/store";
import { createFavorites } from "redux/thunks/favoritesThunk";
import {Favorites} from 'utils/interfaces/Favorite/IFavorite';
import { Item } from "utils/interfaces/Favorite";

// export interface favoriteState{
//     favorites: Favorites[]
// }

// const initialState:Favorites={href:"",items:[],limit:0,next:null,offset:0,previous:null,total:0}

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
        setDeleteFav:(state, action: PayloadAction<{id:string}>)=>{
            const {id}=action.payload;
        },
        setDeleteSuccess:(state, action: PayloadAction<{id:string}>)=>{
            const {id}=action.payload;
        },
        setCreateFav:(state, action: PayloadAction<{id:string}>)=>{
            const {id}=action.payload;
            
        },
       
    },
 
})

export const selectFavoritesInfo=(state: RootState)=> state.favorites;
export const {setFavorites, setDeleteFav, setCreateFav} = favoritesSlice.actions;
export default favoritesSlice.reducer;