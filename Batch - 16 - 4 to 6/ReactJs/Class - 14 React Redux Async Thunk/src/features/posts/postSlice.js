import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPost = createAsyncThunk(
    "posts/fetchPost",
     async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return response.json()
     }
    );

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    // empty
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPost.pending, (state)=>{
        state.loading = true
    })
    .addCase(fetchPost.fulfilled, (state, action)=>{
        state.posts = action.payload
        state.loading = false
    })
    .addCase(fetchPost.rejected , (state, action)=>{
        state.error = action.error.message  
        state.loading = false
    })
  }
});

export default postSlice.reducer
