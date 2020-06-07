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
      <div style={{ height: 60, color: '#fff', lineHeight: '60px', textAlign: 'center', fontSize: 40 }}>
        Q
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