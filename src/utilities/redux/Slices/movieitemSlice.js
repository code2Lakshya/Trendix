import { createSlice } from "@reduxjs/toolkit";



export const movieitemSlice=createSlice({
name: 'movie',
initialState: {credits: null, videos: null},
reducers: {
    addCredits: (state,action)=>{
        state.credits=action.payload;
    },
    addVideos: (state,action)=>{
        state.videos=action.payload;
    }
}
});

export const {addCredits,addVideos}=movieitemSlice.actions;
export default movieitemSlice.reducer;