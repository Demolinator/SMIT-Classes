import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/UserSlice"
import postReducer from "../features/posts/postSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer
    }
})

// {
//     user: [],
//     loading: false,
//     error: null,
// }