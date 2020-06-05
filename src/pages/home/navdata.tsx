import React from 'react'
import PageTable from "../pageTable";
import PageIcon from "../pageIcon";
import PageUpload from "../pageUpload";
import PageCheats from "../pageCheats";
import CustomEditor from "../../components/customeditor";
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';

export const headerData = [
  { path: "/nav1", title: 'nav 1', key: '/nav1' },
  { path: "/nav2", title: 'nav 2', key: '/nav2' },
  { path: "/nav3", title: 'nav 3', key: '/nav3' },
]
export const siderList = [
  [
    {
      path: "/nav1",
      title: 'Option 1-1',
      key: '/nav1',
      icon: <DesktopOutlined />,
      component: PageTable
    },
    {
      path: "/nav1/option2",
      title: 'Option 1-2',
      key: '/nav1/option2',
      icon: <PieChartOutlined />,
      component: CustomEditor
    },
    {
      path: "/nav1/option3",
      title: 'Option 1-3',
      key: '/nav1/option3',
      icon: <UserOutlined />,
      component: PageIcon
    },
  ],
  [
    {
      path: "/nav2",
      title: 'Option 2-1',
      key: '/nav2',
      icon: <DesktopOutlined />,
      component: PageUpload
    },
    {
      path: "/nav2/option2",
      title: 'Option 2-2',
      key: '/nav2/option2',
      icon: <PieChartOutlined />,
      component: () => <i>Option 2-2</i>
    },
    {
      path: "/nav2/option3",
      title: 'Option 2-3',
      key: '/nav2/option3',
      icon: <UserOutlined />,
      component: () => <i>Option 2-3</i>
    },
  ],
  [
    {
      path: "/nav3",
      title: 'Option 3-1',
      key: '/nav3',
      icon: <DesktopOutlined />,
      component: PageCheats
    },
    {
      path: "/nav3/option2",
      title: 'Option 3-2',
      key: '/nav3/option2',
      icon: <PieChartOutlined />,
      component: () => <i>Option 3-2</i>
    },
    {
      path: "/nav3/option3",
      title: 'Option 3-3',
      key: '/nav3/option3',
      icon: <UserOutlined />,
      component: () => <i>Option 3-3</i>
    },
  ]
]