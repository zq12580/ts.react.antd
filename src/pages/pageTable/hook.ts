import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { SelectionChangedEvent } from 'ag-grid-community';
import { tableAction } from "./action";
const { getTableList, setCurSelect } = tableAction

const useTable = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTableList())
    return (() => {
      console.log('销毁了');
    })
  }, [])
  // 选中行事件
  const onTableSelect = (params: SelectionChangedEvent) => {
    const curSelect = params.api.getSelectedRows()
    dispatch(setCurSelect(curSelect))
  }
  return { onTableSelect }
}
export default useTable