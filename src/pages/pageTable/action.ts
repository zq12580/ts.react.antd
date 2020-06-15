export const actionTypes = {
  GET_TABLELIST: Symbol(),//获取表单信息
  SET_TABLELIST: Symbol(),//设置表单信息
  SET_CURSELECT: Symbol()//设置当前选择行
}
const { GET_TABLELIST, SET_TABLELIST, SET_CURSELECT } = actionTypes

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
