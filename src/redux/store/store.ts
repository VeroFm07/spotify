import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "redux/slices/userSlice";
import {playlistSlice } from "redux/slices/playlistSlice";
import {favoritesSlice} from "redux/slices/favoritesSlice";
import {deleteFavSlice} from "redux/slices/deleteFavSlice";
import {createFavSlice} from "redux/slices/createFavSlice";

export const store= configureStore({
    reducer:{
        playlist: playlistSlice.reducer,
        user: userSlice.reducer,
        favorites: favoritesSlice.reducer,
        deleteFav: deleteFavSlice.reducer,
        createFav: createFavSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store