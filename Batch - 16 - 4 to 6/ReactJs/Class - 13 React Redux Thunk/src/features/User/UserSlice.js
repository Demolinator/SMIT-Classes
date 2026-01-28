import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunk
// pending
// fulfilled
// rejected

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");

  const user = await data.json();

  return user;
});

// Slice
// Slice, Reducer, Actions

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
