import { createSlice } from "@reduxjs/toolkit";


export const searchSlice=createSlice({
    name: 'search',
    initialState: '',
    reducers:{
        addSearch: (state,action)=>{
            return action.payload;
        }
    }
})

export const {addSearch}=searchSlice.actions;
export default searchSlice.reducer;