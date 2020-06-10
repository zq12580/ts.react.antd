import { loginType } from "../../redux/type";
import { Store } from "antd/lib/form/interface";

const { POST_LOGIN, SET_TOKEN } = loginType

const defaultState = {
  token: ''
}
export default function reducer(state = defaultState, action: { type: symbol; payload: any; }) {
  switch (action.type) {
    case SET_TOKEN:
      const token = action.payload
      return { ...state, token };
    default:
      return state;
  }
}

export const action = {
  postLogin: (params: Store) => ({
    type: POST_LOGIN,
    payload: params
  }),
  setToken: (params: string) => ({
    type: SET_TOKEN,
    payload: params
  })

}

