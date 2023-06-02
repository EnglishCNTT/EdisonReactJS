import { call, put, takeLatest } from "redux-saga/effects";
import todoService from "./api";
import { all } from "axios";
import { fetchTodoListSagaAction } from "./action";
import { setTodoList } from "./slide";

function* fetchTodoList() {
    // Call API
    const res = yield call(todoService.getTodoList());

    yield put(setTodoList(res));

}

export default function* todoSaga() {
    yield all([takeLatest(fetchTodoListSagaAction, fetchTodoList)]);
}
