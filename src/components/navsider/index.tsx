import React, { useState, useEffect, ReactNode } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavSider: React.FC<Props> = (props) => {
  const { data, curKey } = props
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('')

  useEffect(() => {
    setSelectedKey(curKey)
  }, [curKey])
  // 侧边栏显示隐藏
  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div style={{ height: 32, background: 'url(https://zhengxin-pub.bj.bcebos.com/financepic/c1602e6cdd15808b2f0594fbdbede8a5_fullsize.jpg) no-repeat', backgroundSize: '41px 32px', margin: 16, color: '#fff', textAlign: "right", fontSize: 16 }}>
        {collapsed ? '' : '咸亨国际物联网'}
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
        {data.map((item: NavData) => <Menu.Item key={item.key} icon={item.icon}><Link to={item.path}>{item.title}</Link></Menu.Item>)}
      </Menu>
    </Layout.Sider >
  )
}
export default NavSider

// 数据类型
interface NavData { path: string, title: string, key: string, icon: ReactNode, component: ReactNode }
interface Props {
  data: NavData[],
  curKey: string
}