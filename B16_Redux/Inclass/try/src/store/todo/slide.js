import todoService from "./api";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchTodoListAction = createAsyncThunk(
  "todo/fetchTodoList",
  async (payload, thunkAPI) => {
    // console.log(111, payload, thunkAPI.getState());
    const res = await todoService.getTodoList();

    console.log(res.data);
  }
);

const todoSlice = createSlice({
  name: "todo",

  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {
    setTodoList: (state, actions) => {
      state.todos = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoListAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodoListAction.fulfilled, (state, actions) => {
      state.todos = actions.payload;
      state.loading = false;
    });
    builder.addCase(fetchTodoListAction.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setTodoList } = todoSlice.actions;
export default todoSlice.reducer;
