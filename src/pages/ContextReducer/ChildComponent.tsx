import React, { useContext } from 'react'
import { Context } from "./index";
import { Button } from 'antd';
const ChildComponent = () => {
  const AppContext: any = useContext(Context)
  const { state, dispatch } = AppContext
  const { num } = state

  return (
    <>
      <h1>{num}</h1>
      <Button onClick={() => { dispatch({ type: 'ADD_NUM', display: num + 1 }) }} >+</Button>&nbsp;
      <Button onClick={() => { dispatch({ type: 'REDUCE_NUM', display: num - 1 }) }} >-</Button>
    </>
  )
}
export default ChildComponent