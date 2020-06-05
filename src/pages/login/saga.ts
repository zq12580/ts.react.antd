import { all, fork, takeEvery, select, put } from '@redux-saga/core/effects';
import { loginType } from "../../redux/type";
const { ADD_NUMBER } = loginType

function* alltask() {
  yield takeEvery(ADD_NUMBER, getdata);
}
function* getdata(params: any) {
  const data = yield select((state) => state.loginData);
  console.log(data);
}

export default function* endauditsagas() {
  yield all([
    fork(alltask),
  ]);
}
