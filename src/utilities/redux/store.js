import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./Slices/searchSlice";
import genreSlice from "./Slices/genreSlice";


export const store=configureStore({
    reducer:{
        search : searchSlice,
        genre: genreSlice
    }
})