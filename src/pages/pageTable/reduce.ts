import { actionTypes } from "./action";
const { SET_TABLELIST, SET_CURSELECT } = actionTypes

const defaultState = {
  tableList: [],
  curSelect: [],
}
export default function reducer(state = defaultState, action: { type: symbol; payload: any; }) {
  const { type, payload } = action
  switch (type) {
    case SET_TABLELIST:
      return { ...state, ...{ tableList: payload } }
    case SET_CURSELECT:
      return { ...state, ...{ curSelect: payload } }
    default:
      return state;
  }
}