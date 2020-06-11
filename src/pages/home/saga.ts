import {
  all, fork,
  //  takeEvery, select, put 
} from '@redux-saga/core/effects';
function* alltask() {
  // yield takeEvery(POST_LOGIN, postLogin);
}
// function* postLogin(params: any) {
//   const data = yield select((state) => state.loginData);
//   yield put(setToken('tokentokentokentokentokentoken'))
// }

export default function* endauditsagas() {
  yield all([
    fork(alltask),
  ]);
}