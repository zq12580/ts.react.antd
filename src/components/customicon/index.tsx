import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';

const CustomIcon: React.FC<Props> = (props) => {
  const { type, size } = props
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1279020_wuz07vxkb6d.js', // 在 iconfont.cn 上生成
  });
  return (<MyIcon type={type} style={{ fontSize: size }} />)
}

export default CustomIcon

// 数据类型
interface Props {
  type: string;
  size?: number;
}