import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: [],
  },
  reducers: {
    addPost: (state, action) => {
        state.value.unshift(action.payload);
    },
    removePost: (state, action) => {
    },
    editPost: (state, action) => {
    },
    addAllPost: (state, action) => {
        state.value.push(...action.payload);
    }
  },
});

export const { addPost, removePost, editPost, addAllPost } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
