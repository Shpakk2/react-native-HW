import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { dbSlice } from "./dashboard/dbSlice";

const rootReducer = combineReducers({
    [authSlice.name]:authSlice.reducer,
    [dbSlice.name]: dbSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});