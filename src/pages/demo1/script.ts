import { useState } from 'react'

const DemoState = () => {
  const [switchState, setSwitchState] = useState('123')
  return ({ switchState })
}
export default DemoState