import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase } from "./store/counter";
import { decrease } from "./store/counter";
import { fetchTodoListAction } from "./store/todo/slide";
import { fetchTodoListSagaAction } from "./store/todo/action";

export default function Admin() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.todo);

  useEffect(() => {
    // dispatch(fetchTodoListAction({ _page: 1, _limit: 10 }));

    dispatch(fetchTodoListSagaAction());  
  }, [dispatch]);

  const onDecrease = () => {
    dispatch(decrease(10));
  };
  const onIncrease = () => {
    dispatch(increase(10));
  };
  return loading ? <div>Loading...</div> : <div>Done</div>;
  // <div>
  //   <span>{counter}</span>
  //   <button onClick={onDecrease}>-</button>
  //   <button onClick={onIncrease}>+</button>
  // </div>
}
