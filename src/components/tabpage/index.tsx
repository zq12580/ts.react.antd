import React, { useState, useEffect } from 'react'
import { Tabs, Button } from 'antd';
import { Route } from 'react-router-dom';

const TabPage: React.FC<Props> = (props) => {
  const { data, selcetKey, onRemove, onChangeKey, onClean } = props
  const [tabList, setTabList] = useState<any>([])
  const [activeKey, setActiveKey] = useState<string>('')

  useEffect(() => {
    setTabList(data)
    setActiveKey(selcetKey)
  }, [selcetKey, data])

  // 编辑
  const onEdit = (targetKey: string | React.MouseEvent<HTMLElement>, action: 'add' | 'remove') => {
    if (action === 'remove') {
      onRemove(targetKey)
    }
  }
  // 切换
  const onChange = (activeKey: string) => {
    onChangeKey(activeKey)
  }
  return (
    <div>
      <Tabs
        hideAdd={true}
        type="editable-card"
        activeKey={activeKey}
        onEdit={onEdit}
        onChange={onChange}
        animated
        size='small'
        tabBarExtraContent={<Button type='dashed' danger onClick={onClean}>清除页签</Button>}
        tabBarStyle={{ margin: 0 }}
      >
        {tabList.map((item: any, key: number) => {
          return (
            <Tabs.TabPane
              tab={<span style={{ fontWeight: 500 }}>{item.title}</span>}
              key={item.key}
              closable={key < tabList.length - 1}
              style={{ padding: 10, maxHeight: 830, overflow: 'auto' }}
            >
              {data === tabList ? <item.component /> : <Route exact path={item.push} component={item.component}></Route>}
            </Tabs.TabPane>
          )
        })}
      </Tabs>

    </div >
  )
}
export default TabPage
// 数据类型
interface Props {
  data: any[],
  selcetKey: string,
  onRemove: (targetKey: string | React.MouseEvent<HTMLElement>) => void,
  onChangeKey: (activeKey: string) => void
  onClean: () => void
}