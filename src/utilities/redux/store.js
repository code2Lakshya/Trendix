import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./Slices/searchSlice";
import genreSlice from "./Slices/genreSlice";
import movieitemSlice  from "./Slices/movieitemSlice";


export const store=configureStore({
    reducer:{
        search : searchSlice,
        genre: genreSlice,
        movie: movieitemSlice,
    }
})