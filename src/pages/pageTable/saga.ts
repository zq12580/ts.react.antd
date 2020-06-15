import { takeEvery, select, take, call, put } from '@redux-saga/core/effects';
import { tableAction, actionTypes } from "./action";
import { GET_TABLE_API } from '../../api';
const { GET_TABLELIST, SET_CURSELECT } = actionTypes
const { setTableList } = tableAction

function* getTableList() {
  const { curSelect } = yield select(state => state.tableData)
  // const resData = yield GET_TABLE()//一种
  const request = () => GET_TABLE_API()
  const resData = yield call(request)
  yield put(setTableList(resData))
  yield take(SET_CURSELECT)//当监听到SET_CURSELECT才会执行
  console.log('sage-take', curSelect);
}

function* rootSaga() {
  yield takeEvery(GET_TABLELIST, getTableList)
}
export default rootSaga
