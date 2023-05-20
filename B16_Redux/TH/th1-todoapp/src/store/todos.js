import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 1;

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items : [],
        filter: "all",
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: nextTodoId++,
                content: action.payload,
                done: false,
            });
        },

        finishTodo: (state, action) => {
            const todo = state.items.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.done = true;
            }
        },

        removeTodo: (state, action) => {
            const index = state.items.findIndex(
                (todo) => todo.id === action.payload
            );
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        }

        
    },
});

const todosReducer = todosSlice.reducer;

export const { addTodo } = todosSlice.actions;
export const { finishTodo } = todosSlice.actions;
export const { removeTodo } = todosSlice.actions;
export const { setFilter } = todosSlice.actions;

export default todosReducer;