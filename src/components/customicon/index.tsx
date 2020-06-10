import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';

const CustomIcon: React.FC<Props> = (props) => {
  const { type, size } = props
  const MyIcon = createFromIconfontCN({
    scriptUrl: '/iconfont.js',
  });
  return (<MyIcon type={type} style={{ fontSize: size }} />)
}

export default CustomIcon

// 数据类型
interface Props {
  type: string;
  size?: number;
}