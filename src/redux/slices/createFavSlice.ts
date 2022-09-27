import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Favorites } from 'utils/interfaces/Favorite';

export const createFavSlice=createSlice({
    name:'createFav',
    initialState:{
        createFav:[],
    },
    reducers:{
        setCreateFav:(state:any,action:PayloadAction<Favorites>)=>{
            state.createFav = action.payload;
        }
    }
})

export const {setCreateFav}=createFavSlice.actions;
export default createFavSlice.reducer;