import React, { useReducer, createContext } from 'react'
import { reducer, defaultState } from "./context";
import ChildComponent from "./ChildComponent";

import { Button } from 'antd'

export const Context = createContext({})

const ContextReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const { num } = state
  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <h1>{num}</h1>
        <Button onClick={() => { dispatch({ type: 'ADD_NUM', display: num + 1 }) }}  >+</Button>&nbsp;
        <Button onClick={() => { dispatch({ type: 'REDUCE_NUM', display: num - 1 }) }}>-</Button>
        <ChildComponent />
      </Context.Provider>
    </>
  )
}
export default ContextReducer

