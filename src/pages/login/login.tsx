import React from 'react'
import { Button, message } from 'antd';
import { action } from "./action";
import { useDispatch, useSelector } from 'react-redux';
import Style from './login.module.scss';

const Login = (props: any) => {
  const dispatch = useDispatch();
  const { number } = useSelector((state: any) => state.loginData)
  const { addoNumber } = action

  // 点击
  const onLogin = (params: number) => {
    dispatch(addoNumber(params))
  }

  return (
    <div className={Style.login}>
      <Button type='primary' onClick={() => onLogin(number + 1)}>{number}++++++</Button>
      <Button type='primary' onClick={() => onLogin(number - 1)}>{number}------</Button>
    </div>
  )
}
export default Login