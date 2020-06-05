import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import zhCN from 'antd/es/locale/zh_CN';
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import 'moment/locale/zh-cn';
import "./assets/styles/ant-theme.less";
import './assets/styles/common.scss';

const App = () => {

  const antdConfig = {
    locale: zhCN,
    // prefixCls: 'xh',
    space: { size: 10 },
  }
  return (
    <Provider store={store}>
      <ConfigProvider
        {...antdConfig}
        componentSize='small'
      >
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
            <Route path="/:nav" component={Home}></Route>
            <Redirect exact from='/' to='/nav1'></Redirect>
          </Switch>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
