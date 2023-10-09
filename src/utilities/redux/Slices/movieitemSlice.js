import { createSlice } from "@reduxjs/toolkit";



export const movieitemSlice=createSlice({
name: 'movie',
initialState: {credits: null},
reducers: {
    addCredits: (state,action)=>{
        state.credits=action.payload;
    },
}
});

export const {addCredits}=movieitemSlice.actions;
export default movieitemSlice.reducer;