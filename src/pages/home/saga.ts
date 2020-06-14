import { all, fork } from '@redux-saga/core/effects';
function* alltask() {
}
export default function* endauditsagas() {
  yield all([
    fork(alltask),
  ]);
}