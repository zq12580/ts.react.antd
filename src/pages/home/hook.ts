import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLocalstorage, delLocalStorage } from "../../tools/packWay";
import { homeAction } from "./action";
import { headerData, siderList } from "../../modules/NavData";
import { useLocation, useHistory } from 'react-router-dom';
import { message } from 'antd';
const { setTabList, setSiderList, setCurKey, setHeaderList, setToken } = homeAction

const useHomeState = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation()
  const { replace } = useHistory()
  const { tabList, curKey } = useSelector((state: any) => state.homeData)
  useEffect(() => {
    const token = getLocalstorage('SZZQ')
    const curSelect = siderList.flat().filter(item => item.path === pathname)[0]
    if (curSelect && token) {
      headerData.map((item, index) => {
        if (pathname.indexOf(item.key) >= 0) {
          const { key, path } = curSelect
          const newSiderList = siderList[index]
          const newTabList = tabList.filter((item: any) => item.path !== path)//移除页签中相同的
          // 设置头部导航
          dispatch(setHeaderList(headerData))
          //设置侧边栏
          dispatch(setSiderList(newSiderList))
          // 设置tab
          dispatch(setTabList([...newTabList, curSelect]))
          //设置当前选中
          dispatch(setCurKey(key))
          // 设置token
          dispatch(setToken(token))
        }
      })
    } else if (!token) {
      // 用户没有token
      replace({ pathname: "/login" })
      message.warning('请登录')
    } else if (pathname) {
      // 路由不存在
      delLocalStorage('SZZQ')
      replace({ pathname: "/login" })
      message.warning('路由不存在')
      // 重置路由
      dispatch({ type: 'RESET_REDUX' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // tab移除
  const onRemove = (targetKey: string | React.MouseEvent<HTMLElement>) => {
    const newTabList = tabList.filter((item: any) => item.key !== targetKey)
    const newCurKey = tabList[tabList.length - 1].key
    dispatch(setTabList(newTabList))
    onChangeKey(newCurKey)
  }
  // tab切换
  const onChangeKey = (activeKey: string) => {
    const newSiderList = siderList.filter((item: any) => item.some((info: any) => info.key === activeKey))[0]
    dispatch(setSiderList(newSiderList))
    dispatch(setCurKey(activeKey))
  }
  // tab清除
  const onCleanTab = () => {
    const newTabList = tabList.filter((item: any) => item.path === curKey)
    dispatch(setTabList(newTabList))
  }
  return ({ onRemove, onChangeKey, onCleanTab })
}
export default useHomeState