import React from 'react'
import PageTable from "../pages/pageTable";
import PageIcon from "../pages/pageIcon";
import PageUpload from "../pages/pageUpload";
import PageCheats from "../pages/pageCheats";
import Charts from "../pages/Charts";
import richText from "../pages/richText";
import MarkDown from "../pages/skills/MarkDown";
import LifeCycle from "../pages/skills/LifeCycle";
import Interview from "../pages/skills/Interview";
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
      title: 'Charts',
      icon: <DesktopOutlined />,
      component: Charts
    },
    {
      key: '/nav2/option2',
      path: "/nav2/option2",
      title: 'richText',
      icon: <PieChartOutlined />,
      component: richText
    },
    {
      key: '/nav2/option3',
      path: "/nav2/option3",
      title: 'table',
      icon: <UserOutlined />,
      component: PageTable
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
      title: 'LifeCycle',
      icon: <DesktopOutlined />,
      component: LifeCycle
    },
    {
      key: '/nav4/option2',
      path: "/nav4/option2",
      title: 'MarkDown',
      icon: <PieChartOutlined />,
      component: MarkDown
    },
    {
      key: '/nav4/option3',
      path: "/nav4/option3",
      title: 'Interview',
      icon: <UserOutlined />,
      component: Interview
    },
  ]
]