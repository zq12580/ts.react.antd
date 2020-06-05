import React, { useState } from 'react'
import DemoState from "./script";
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
interface Props {
}
const Demo1: React.FC<Props> = (props) => {
  const { switchState } = DemoState()
  const [isBol, setIsBol] = useState(false)
  return (
    <QueueAnim delay={500} component='div'>
      <div key="demo1">demo=={switchState}</div>
      <div key="demo2">demo=={switchState}</div>
    </QueueAnim>
  )
}
export default Demo1






