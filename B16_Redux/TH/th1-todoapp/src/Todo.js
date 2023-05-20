import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todos";
import { useSelector } from "react-redux";
import { finishTodo } from "./store/todos";
import { removeTodo } from "./store/todos";
import { setFilter } from "./store/todos";

export default function Todo() {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todos));
    setTodos("");
  };

  const handleFinish = (id) => {
    dispatch(finishTodo(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const todosList = useSelector((state) => {
    const { items, filter } = state.todos;
    if (filter === "all") {
      return items;
    }
    if (filter === "done") {
      return items.filter((todo) => todo.done);
    }
    if (filter === "todo") {
      return items.filter((todo) => !todo.done);
    }
  });

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Add new todo"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>

        <div>
          <button onClick={() => handleSetFilter("all")}>All</button>
          <button onClick={() => handleSetFilter("todo")}>Todo</button>
          <button onClick={() => handleSetFilter("done")}>Done</button>
        </div>

        <ul style={{ listStyle: "none" }}>
          {todosList.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.done ? <del>{todo.content}</del> : todo.content}
                {todo.done ? (
                  <button
                    onClick={() => handleRemove(todo.id)}
                    style={{ marginLeft: "20px" }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => handleFinish(todo.id)}
                    style={{ marginLeft: "20px" }}
                  >
                    Finish
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}
