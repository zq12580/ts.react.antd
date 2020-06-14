import { useEffect } from 'react'
import { actionTypes } from "./actionTypes";
import { useDispatch } from 'react-redux';
import { SelectionChangedEvent } from 'ag-grid-community';
const { GET_TABLELIST, SET_TABLELIST, SET_CURSELECT } = actionTypes

const useTable = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(tableAction.getTableList())
  }, [])
  // 选中行事件
  const onTableSelect = (params: SelectionChangedEvent) => {
    const curSelect = params.api.getSelectedRows()
    dispatch(tableAction.setCurSelect(curSelect))
  }
  return { onTableSelect }
}
export default useTable



export const tableAction = {
  getTableList: () => ({
    type: GET_TABLELIST
  }),
  setTableList: (params: any[]) => ({
    type: SET_TABLELIST,
    payload: params
  }),
  setCurSelect: (params: any[]) => ({
    type: SET_CURSELECT,
    payload: params
  })
}