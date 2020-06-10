import { useState, useEffect } from 'react'
import { headerData, siderList } from "../../modules/NavData";
import { useLocation } from 'react-router-dom';

const HomeState = () => {
  const [siderData, setSiderData] = useState<any>([])
  const [tabList, setTabList] = useState<any>([])
  const [tabSelectKey, setTabSelectKey] = useState<string>('')
  const { pathname } = useLocation()
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
    const isQualified = newTabList.some((item: any) => item.path === tabArr[0].path)//判断当前页签是否含有
    setTabSelectKey(path)
    const aaaa = newTabList.filter((item: any) => item.path !== tabArr[0].path)//移除页签中含有的
    // if (!isQualified) {
    setTabList([...aaaa, ...tabArr])
    // }
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