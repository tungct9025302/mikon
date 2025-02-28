import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { auth: authReducer },
});
