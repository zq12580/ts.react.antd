import { actionTypes } from "./action";
import { AnyAction } from "redux";
const { SET_TABLELIST, SET_CURSELECT, SET_LOADING } = actionTypes

const defaultState = {
  tableList: [],
  curSelect: [],
  loading: true,
}
export default function reducer(state = defaultState, action: AnyAction) {
  const { type, payload } = action
  switch (type) {
    case SET_TABLELIST:
      return { ...state, ...{ tableList: payload } }
    case SET_CURSELECT:
      return { ...state, ...{ curSelect: payload } }
    case SET_LOADING:
      return { ...state, ...{ loading: payload } }
    default:
      return state;
  }
}