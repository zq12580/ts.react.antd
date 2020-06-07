import React from 'react'
import PageTable from "../pageTable";
import PageIcon from "../pageIcon";
import PageUpload from "../pageUpload";
import PageCheats from "../pageCheats";
import PageMd from "../pageMd";
import CustomEditor from "../../components/customeditor";
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';

export const headerData = [
  { path: "/nav1", title: 'antd', key: '/nav1' },
  { path: "/nav2", title: 'again', key: '/nav2' },
  { path: "/nav3", title: 'ain', key: '/nav3' },
  { path: "/nav4", title: 'skill', key: '/nav4' },
]
export const siderList = [
  [
    {
      key: '/nav1',
      path: "/nav1",
      title: 'Icon',
      icon: <DesktopOutlined />,
      component: PageIcon
    },
    {
      key: '/nav1/option2',
      path: "/nav1/option2",
      title: 'Upload',
      icon: <PieChartOutlined />,
      component: PageUpload
    },
    {
      key: '/nav1/option3',
      path: "/nav1/option3",
      title: 'Option 1-3',
      icon: <UserOutlined />,
      component: () => <i>Option 1-3</i>
    },
  ],
  [
    {
      key: '/nav2',
      path: "/nav2",
      title: 'table',
      icon: <DesktopOutlined />,
      component: PageTable
    },
    {
      key: '/nav2/option2',
      path: "/nav2/option2",
      title: 'editor',
      icon: <PieChartOutlined />,
      component: CustomEditor
    },
    {
      key: '/nav2/option3',
      path: "/nav2/option3",
      title: 'Option 2-3',
      icon: <UserOutlined />,
      component: () => <i>Option 2-3</i>
    },
  ],
  [
    {
      key: '/nav3',
      path: "/nav3",
      title: 'Option 3-1',
      icon: <DesktopOutlined />,
      component: PageCheats
    },
    {
      key: '/nav3/option2',
      path: "/nav3/option2",
      title: 'Option 3-2',
      icon: <PieChartOutlined />,
      component: () => <i>Option 3-2</i>
    },
    {
      key: '/nav3/option3',
      path: "/nav3/option3",
      title: 'Option 3-3',
      icon: <UserOutlined />,
      component: () => <i>Option 3-3</i>
    },
  ],
  [
    {
      key: '/nav4',
      path: "/nav4",
      title: 'Markdown',
      icon: <DesktopOutlined />,
      component: PageMd
    }
  ]
]