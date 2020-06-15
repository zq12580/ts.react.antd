import { homeType } from "./action";
const { SET_TOKEN, SET_SIDERLIST, SET_TABLIST, SET_CURKEY, SET_HEADERLIST } = homeType


const defaultState = {
  token: '',
  curKey: '',
  headerData: [],
  siderData: [],
  tabList: [],
}

export default function reducer(state = defaultState, action: { type: symbol; payload: any; }) {
  switch (action.type) {
    case SET_TOKEN:
      const token = action.payload
      return { ...state, token };
    case SET_HEADERLIST:
      const headerData = action.payload
      return { ...state, headerData };
    case SET_SIDERLIST:
      const siderData = action.payload
      return { ...state, siderData };
    case SET_TABLIST:
      const tabList = action.payload
      return { ...state, tabList };
    case SET_CURKEY:
      const curKey = action.payload
      return { ...state, curKey };
    default:
      return state;
  }
}

