import { all } from 'redux-saga/effects';
import tableSage from "../pages/pageTable/saga";

// 装载各个 sagas
export default function* () {
  yield all([
    tableSage()
  ])
}