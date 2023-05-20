import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./student";

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});
