import React, { useEffect } from 'react'
import { Typography } from 'antd';
import { clearArr, clearArrObj, sortArr } from "../../tools/packWay";
const { Title, Paragraph } = Typography;

const Interview = () => {
  const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a']
  const arrObj = [
    { a: '1', b: '2' },
    { a: '3', b: '4' },
    { a: '1', b: '5' }
  ]
  useEffect(() => {
    console.log('数组去重:', clearArr(arr));
    console.log('数组对象去重:', clearArrObj(arrObj, 'a'));
    console.log('数组排序:', sortArr([9, 8, 5, 6]));
  }, [])
  return (
    <>
      <div style={{ width: '50%', float: 'left' }}>
        <Title level={4}>设置Localstorage:<Paragraph copyable>setLocalstorage()</Paragraph></Title>
        <Title level={4}>设置Localstorage:<Paragraph copyable>getLocalstorage()</Paragraph></Title>
        <Title level={4}>清楚Localstorage:<Paragraph copyable>delLocalStorage()</Paragraph></Title>
        <Title level={4}>数组去重:<Paragraph copyable>clearArr()</Paragraph></Title>
        <Title level={4}>数组对象去重:<Paragraph copyable>clearArrObj()</Paragraph></Title>
        <Title level={4}>数组排序:<Paragraph copyable>sortArr()</Paragraph></Title>
      </div>
      <div style={{ width: '50%', float: 'right' }}>
        <Title level={4}>去除字符串两端空格:<Paragraph copyable>string.trim()|trimStart()|trimLeft()|trimEnd()|trimRight()</Paragraph></Title>
        <Title level={4}>数组展平:<Paragraph copyable>arr.flat(展平层级)</Paragraph></Title>
        <Title level={4}>'??'=>只会识别null和undefined;'a?.b'会返回undefind</Title>
      </div>
    </>

  )
}
export default Interview