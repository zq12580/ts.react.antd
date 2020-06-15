import React from 'react'
import QueueAnim from 'rc-queue-anim';
import NavHeader from "../../components/navheader";
import NavSider from "../../components/navsider";
import TabPage from '../../components/tabpage';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import HomeState from "./hook";
const Home = () => {
  const { headerData, tabList, siderData, curKey } = useSelector((state: any) => state.homeData)
  const { onChangeKey, onRemove, onCleanTab } = HomeState()
  return (
    <QueueAnim type='bottom' duration={1000}>
      <Layout style={{ minHeight: '100vh', background: '#fff' }} key={'box'}>
        <NavSider data={siderData} curKey={curKey} />
        <Layout.Content>
          <NavHeader data={headerData} curKey={curKey} />
          <TabPage
            data={tabList}
            curKey={curKey}
            onRemove={onRemove}
            onChangeKey={onChangeKey}
            onClean={onCleanTab}
          />
        </Layout.Content>
      </Layout>
    </QueueAnim>
  )
}
export default Home