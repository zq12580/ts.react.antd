
export const defaultState = {
  num: 0
}

export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_NUM':
      return { ...state, num: state.num + 1 };
    case 'REDUCE_NUM':
      return { ...state, num: state.num - 1 };
    default:
      throw new Error();
  }
}