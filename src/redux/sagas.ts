import { all } from 'redux-saga/effects';
import homeSaga from "../pages/home/saga";

// 装载各个 sagas
export default function* () {
  yield all([
    homeSaga()
  ])
}