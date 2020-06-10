import { all, fork, takeEvery, select, put } from '@redux-saga/core/effects';
import { setLocalstorage } from "../../tools/packWay";
import { loginType } from "../../redux/type";
import { action } from "./action";
const { POST_LOGIN } = loginType
const { setToken } = action

function* alltask() {
  yield takeEvery(POST_LOGIN, postLogin);
}
function* postLogin(params: any) {
  const data = yield select((state) => state.loginData);
  setLocalstorage('SZZQ', '我是SZZQ的token')
  yield put(setToken('tokentokentokentokentokentoken'))
}

export default function* endauditsagas() {
  yield all([
    fork(alltask),
  ]);
}
