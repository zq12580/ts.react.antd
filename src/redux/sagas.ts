import { all } from 'redux-saga/effects';
import loginSaga from "../pages/login/saga";

// 装载各个 sagas
export default function* () {
  yield all([
    loginSaga()
  ])
}