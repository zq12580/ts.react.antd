import { useState, useEffect } from 'react'
import { headerData, siderList } from "../../modules/NavData";
import { useLocation, useHistory } from 'react-router-dom';
import { getLocalstorage } from "../../tools/packWay";
import { message } from 'antd';

const HomeState = () => {
  const [siderData, setSiderData] = useState<any>([])
  const [tabList, setTabList] = useState<any>([])
  const [tabSelectKey, setTabSelectKey] = useState<string>('')
  const { pathname } = useLocation()
  const { replace } = useHistory()
  useEffect(() => {
    const token = getLocalstorage('SZZQ')
    token || replace({ pathname: "/login" })
  }, [])
  useEffect(() => {
    // 页签导航
    tabNav(pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    // 侧边栏数据
    headerData.map((item, key) => {
      if (tabSelectKey.indexOf(item.key) >= 0) {
        setSiderData(siderList[key])
      }
    })
  }, [tabSelectKey])
  // 页签导航
  const tabNav = (path: string) => {
    const newTabList = [...tabList]
    const tabArr = siderList.flat().filter(item => item.path === path)//获取点击的那一项
    if (tabArr.length) {//路由存在
      setTabSelectKey(path)
      const delQualified = newTabList.filter((item: any) => item.path !== tabArr[0].path)//移除页签中含有的
      setTabList([...delQualified, ...tabArr])
    } else {//路由不存在
      message.warning('别瞎虾基粑乱输=>路由不存在')
      replace({ pathname: "/login" })
    }

  }
  // 页签编辑
  const tabRemove = (targetKey: string | React.MouseEvent<HTMLElement>) => {
    const newTabList = tabList.filter((item: any) => item.path !== targetKey)
    setTabList(newTabList)
  }
  // 页签选中改变
  const tabChangeKey = (activeKey: string) => {
    setTabSelectKey(activeKey)
  }
  // 页签清除全部
  const tabClean = () => {
    const newTabList = tabList.filter((item: any) => item.path === tabSelectKey)
    setTabList(newTabList)

  }




  return ({ siderData, headerData, tabSelectKey, tabList, tabRemove, tabChangeKey, tabClean })
}
export default HomeState