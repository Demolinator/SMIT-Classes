import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/conterSlice"

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})