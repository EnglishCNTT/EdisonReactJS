import counterReducer from "./couter";
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        users: counterReducer,
    }
})