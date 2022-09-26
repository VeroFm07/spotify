import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Favorites } from 'utils/interfaces/Favorite';

export const deleteFavSlice=createSlice({
    name:'deleteFav',
    initialState:{
        deleteFav:[],
    },
    reducers:{
        setDeleteFav:(state:any,action:PayloadAction<Favorites>)=>{
            state.deleteFav = action.payload;
        }
    }
})

export const {setDeleteFav}=deleteFavSlice.actions;
export default deleteFavSlice.reducer;