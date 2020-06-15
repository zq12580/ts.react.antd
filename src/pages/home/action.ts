export const homeType = {
  SET_TOKEN: Symbol(),//设置token
  SET_HEADERLIST: Symbol(),//设置头部导航
  SET_SIDERLIST: Symbol(),//设置侧边栏
  SET_TABLIST: Symbol(),//设置页签
  SET_CURKEY: Symbol(),//设置当前选择的key
}
const { SET_TOKEN, SET_HEADERLIST, SET_SIDERLIST, SET_TABLIST, SET_CURKEY } = homeType
export const homeAction = {
  setToken: (params: string) => ({
    type: SET_TOKEN,
    payload: params
  }),
  setHeaderList: (params: any[]) => ({
    type: SET_HEADERLIST,
    payload: params
  }),
  setSiderList: (params: any[]) => ({
    type: SET_SIDERLIST,
    payload: params
  }),
  setTabList: (params: any[]) => ({
    type: SET_TABLIST,
    payload: params
  }),
  setCurKey: (params: string) => ({
    type: SET_CURKEY,
    payload: params
  }),
}
