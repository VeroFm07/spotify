import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "redux/slices/userSlice";
import {playlistSlice } from "redux/slices/playlistSlice";
import {favoritesSlice} from "redux/slices/favoritesSlice";

export const store= configureStore({
    reducer:{
        playlist: playlistSlice.reducer,
        favorites: favoritesSlice.reducer,
        user: userSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store