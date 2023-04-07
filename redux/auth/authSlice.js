import { createSlice } from "@reduxjs/toolkit";
import { logOut, signIn, signUp, updateUserStatus } from "./authOperations";
const state = {
  isLoggedIn: false,
  userData: {
    id: null,
    photo: null,
    name: null,
    email: null,
  },
};
export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  extraReducers: (builder) =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.userData.id = payload.uid;
        state.userData.photo = payload.photo;
        state.userData.name = payload.name;
        state.userData.email = payload.email;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.userData.id = payload.uid;
        state.userData.photo = payload.photo;
        state.userData.name = payload.name;
        state.userData.email = payload.email;
        state.isLoggedIn = true;
      })
      .addCase(updateUserStatus.fulfilled, (state, { payload }) => {
        state.userData.id = payload.uid;
        state.userData.photo = payload.photo;
        state.userData.name = payload.name;
        state.userData.email = payload.email;
        state.isLoggedIn = payload.isLoggedIn;
      })
      .addCase(logOut.fulfilled, () => ({
        ...state,
      })),
});
