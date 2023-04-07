import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./dbOperations";

const state = {
  posts: [],
};
export const dbSlice = createSlice({
  name: "post",
  initialState: state,
  extraReducers: (builder) =>
    builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
    }),
});