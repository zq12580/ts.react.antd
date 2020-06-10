import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { setLocalstorage } from "../../tools/packWay";
// import { action } from "./action";
// import { useDispatch, useSelector } from 'react-redux';
import Style from './login.module.scss';
import { Store } from 'antd/lib/form/interface';

const Login = (props: any) => {
  // const dispatch = useDispatch();
  // const { router } = useSelector((state: any) => state)
  // const { postLogin } = action
  const [form] = Form.useForm();
  const { replace } = useHistory()
  const onSubmit = (info: Store) => {
    console.log(info);
    if (info.username === "admin" && info.password === "123456") {
      setLocalstorage('SZZQ', '我是SZZQ的token')
      replace({ pathname: "/" })
      message.success('登录成功')
    } else {
      message.warning('用户名密码不匹配')
    }
  }
  return (
    <div className={Style.login}>
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onSubmit} initialValues={{ username: "admin", password: "123456" }}>
        <Form.Item name="username" rules={[{ required: true, message: '输入用户名!' }]} >
          <Input placeholder="admin" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '输入密码!' }]} >
          <Input type="password" placeholder="123456" />
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (<Button htmlType="submit" >登陆</Button>)}
        </Form.Item>
      </Form>
    </div>
  )
}
export default Login
console.log(`
██╗  ██╗██╗  ██╗ ██████╗      ██╗   ███████╗██████╗ ███╗   ███╗
╚██╗██╔╝██║  ██║██╔════╝      ██║   ██╔════╝██╔══██╗████╗ ████║
 ╚███╔╝ ███████║██║  ███╗     ██║   ███████╗██████╔╝██╔████╔██║
 ██╔██╗ ██╔══██║██║   ██║██   ██║   ╚════██║██╔══██╗██║╚██╔╝██║
██╔╝ ██╗██║  ██║╚██████╔╝╚█████╔╝██╗███████║██║  ██║██║ ╚═╝ ██║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
 `);
