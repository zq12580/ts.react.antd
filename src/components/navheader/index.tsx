import React, { useState, useEffect } from 'react'
import { Layout, Menu, Badge, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const NavHeader: React.FC<Props> = (props) => {
  const { data, curKey } = props
  const [selectedKey, setSelectedKey] = useState('')
  useEffect(() => {
    curSelect(curKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curKey])
  // 确定key值
  const curSelect = (path: string) => {
    data.map((item: NavData) => {
      if (path.indexOf(item.key) >= 0) {
        setSelectedKey(item.key)
      }
    })
  }

  return (
    <Layout.Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
        {data.map((item: NavData) => <Menu.Item key={item.key}><Link to={item.path}>{item.title}</Link></Menu.Item>)}
      </Menu>
      <Badge count={1} >
        <Avatar shape="square">Q</Avatar>
      </Badge>

    </Layout.Header>
  )
}
export default NavHeader

// 数据类型
interface NavData { path: string, title: string, key: string }
interface Props {
  data: NavData[];
  curKey: string
}