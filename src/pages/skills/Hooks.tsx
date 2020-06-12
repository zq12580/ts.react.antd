import React, { useState, useEffect, useRef } from 'react'
import { Typography, Button } from 'antd';
const { Paragraph, Title } = Typography;

const Hooks = () => {
  const couterRef = useRef(null);
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('useRef=>', couterRef.current);
    return (() => console.log('状态被销毁', number))
  }, [number])

  const onNum = () => {
    setNumber(number + 1)
  }
  return (
    <div>
      <Title level={1}>{number}</Title>
      <Button onClick={onNum} ref={couterRef}>useState点击</Button>
      <Paragraph copyable>useState()</Paragraph>
      <Paragraph copyable>useEffect()</Paragraph>
      <Paragraph copyable>useRef()</Paragraph>
      <Paragraph copyable>useContext()</Paragraph>
      <Paragraph copyable>useReducer()</Paragraph>
      <Paragraph copyable>useMemo()</Paragraph>
      <Paragraph copyable>useCallback()</Paragraph>
    </div>
  )
}
export default Hooks
