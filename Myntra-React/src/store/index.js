import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";


const myntraStore=configureStore({
    reducer:{
        items:itemsSlice.reducer,
    }
})

export default myntraStore;