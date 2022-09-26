import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { User} from 'utils/interfaces/User/IUser';

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: [],
    },
    reducers: {
        setUser: (state:any, action:PayloadAction<User>)=>{
            state.user= action.payload;
        }
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;