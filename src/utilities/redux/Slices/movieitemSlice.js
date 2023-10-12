import { createSlice } from "@reduxjs/toolkit";



export const movieitemSlice=createSlice({
name: 'movie',
initialState: {credits: null, videos: null, showVideoPlayer: false, videoSrc: ''},
reducers: {
    addCredits: (state,action)=>{
        state.credits=action.payload;
    },
    addVideos: (state,action)=>{
        state.videos=action.payload;
    },
    togglePlayer: (state,action)=>{
        state.showVideoPlayer=action.payload;
    },
    setVideoSrc: (state,action)=>{
        state.videoSrc=action.payload;
    }
}
});

export const {addCredits,addVideos,togglePlayer,setVideoSrc}=movieitemSlice.actions;
export default movieitemSlice.reducer;