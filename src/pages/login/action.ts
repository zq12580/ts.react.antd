import { loginType } from "../../redux/type";

const { ADD_NUMBER } = loginType

const defaultState = {
  number: 0
}

export default function reducer(state = defaultState, action: { type: symbol; payload: any; }) {

  switch (action.type) {
    case ADD_NUMBER:
      state.number = action.payload;
      return { ...state };
    default:
      return state;
  }
}

export const action = {
  addoNumber: (params: number) => ({
    type: ADD_NUMBER,
    payload: params
  })
}

