import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice=createSlice({
    name:"fetchStatus",
    initialState:{
        fetched:false,
        fetching:false
    },
    reducers:{
        markFetched:(state)=>{
            state.fetched=true;
        },
        markFetchingStarted:(state)=>{
            state.fetching=true;
        },
        markFetchingEnded:(state)=>{
            state.fetching=false;
        }
    }
})

export const fetchStatusActions=fetchStatusSlice.actions;

export default fetchStatusSlice;