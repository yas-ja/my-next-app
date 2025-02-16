import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as auth } from "./authSlice";

const allReducer = combineReducers({
  auth,
});

export const store = configureStore({
  reducer: allReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
