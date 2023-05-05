import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count : 10,
    },
    reducers: {
        increase: (state, action) => {
            console.log("state", state);
            console.log("action", action);
            const count = state.count;
            state.count = count + action.payload;
        },

        decrease: (state, action) => {
            console.log("state", state);
            console.log("action", action);
            const count = state.count;
            state.count = count - action.payload;
        },
    },
});

const counterReducer = counterSlice.reducer;

export const { increase } = counterSlice.actions;
export const { decrease } = counterSlice.actions;

export default counterReducer;