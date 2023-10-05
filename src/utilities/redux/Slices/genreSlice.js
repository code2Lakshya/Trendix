import { createSlice } from "@reduxjs/toolkit";


export const genreSlice=createSlice({
    name: 'genre',
    initialState: null,
    reducers:{
        addGenre: (state,action)=>{
            return ({...state,...action.payload});
        }
    }
})
export const { addGenre} =genreSlice.actions;
export default genreSlice.reducer;