import { takeEvery, select, take, call, put } from '@redux-saga/core/effects';
import { tableAction, actionTypes } from "./action";
import { GET_TABLE_API } from '../../api';
const { GET_TABLELIST, SET_CURSELECT } = actionTypes
const { setTableList, setLoading } = tableAction

function* getTableList() {
  yield put(setLoading(true))
  const { curSelect } = yield select(state => state.tableData)
  const request = () => GET_TABLE_API()
  const resData = yield call(request)
  yield put(setTableList(resData))
  yield put(setLoading(false))
  yield take(SET_CURSELECT)//当监听到SET_CURSELECT才会执行
  console.log('sage-take', curSelect)
}

function* rootSaga() {
  yield takeEvery(GET_TABLELIST, getTableList)
}
export default rootSaga
