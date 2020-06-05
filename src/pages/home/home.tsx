import React from 'react'
import { Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';
import NavHeader from "../../components/navheader";
import NavSider from "../../components/navsider";
import TabPage from '../../components/tabpage';
import HomeState from "./state";
import { Route, Switch } from 'react-router-dom';
import Nothingness from "../../components/404";
import Demo1 from "../demo1/demo";
import Login from "../login/login";

const Home = (props: any) => {
  const { headerData, siderData, tabSelectKey, tabList, tabRemove, tabChangeKey, tabClean } = HomeState()
  return (
    <QueueAnim type='bottom' delay={500} duration={1000}>
      <Layout style={{ minHeight: '100vh', background: '#fff' }} key={'box'}>
        <NavSider data={siderData} curKey={tabSelectKey} />
        <Layout.Content >
          <NavHeader data={headerData} curKey={tabSelectKey} />
          <TabPage data={tabList} selcetKey={tabSelectKey} onRemove={tabRemove} onChangeKey={tabChangeKey} onClean={tabClean} />
          {/* <Switch>
            <Route exact path="/nav1" component={Demo1}></Route>
            <Route exact path="/nav1/option2" component={Login}></Route>
            <Route exact path="/nav1/option3" component={Demo1}></Route>
            <Route exact path="/nav2" component={Login}></Route>
            <Route exact path="/nav2/option2" component={Login}></Route>
            <Route exact path="/nav2/option3" component={Demo1}></Route>
            <Route exact path="/nav3" component={() => <i>nav3</i>}></Route>
            <Route exact path="/nav3/option2" component={Login}></Route>
            <Route exact path="/nav3/option3" component={Demo1}></Route>
            <Route path="/*" component={Nothingness}></Route>
          </Switch> */}
        </Layout.Content>
      </Layout>
    </QueueAnim>
  )
}
export default Home