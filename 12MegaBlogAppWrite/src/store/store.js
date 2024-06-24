import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    // another way
    // auth : authSlice
    authReducer,
    // TODO: add more slice for post
  },
});

export default store;
