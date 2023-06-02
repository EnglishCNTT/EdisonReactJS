import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/todos";

// Action types
export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

// Action creators
export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_TODOS_REQUEST });
      const todos = await getTodos();
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: todos });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    }
  };
};

export const addNewTodo = (todo) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_TODO_REQUEST });
      const newTodo = await addTodo(todo);
      dispatch({ type: ADD_TODO_SUCCESS, payload: newTodo });
    } catch (error) {
      dispatch({ type: ADD_TODO_FAILURE, payload: error.message });
    }
  };
};

export const updateExistingTodo = (id, updatedTodo) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_TODO_REQUEST });
      const todo = await updateTodo(id, updatedTodo);
      dispatch({ type: UPDATE_TODO_SUCCESS, payload: todo });
    } catch (error) {
      dispatch({ type: UPDATE_TODO_FAILURE, payload: error.message });
    }
  };
};

export const deleteExistingTodo = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_TODO_REQUEST });
      const deletedTodo = await deleteTodo(id);
      dispatch({ type: DELETE_TODO_SUCCESS, payload: deletedTodo });
    } catch (error) {
      dispatch({ type: DELETE_TODO_FAILURE, payload: error.message });
    }
  };
};
