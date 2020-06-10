import React, { useState } from 'react'
import { Typography, List, Button } from 'antd';
import { clearArr, clearArrObj } from "../../tools/packWay";
const { Title, Text, Paragraph } = Typography;

const Interview = () => {
  const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a']
  const [newArrList, setNewArrList] = useState<string[]>([])

  console.log(clearArrObj([
    {
      a: '1',
      b: '2'
    },
    {
      a: '3',
      b: '4'
    },
    {
      a: '1',
      b: '5'
    }
  ], 'a'));




  // 去重
  const repetition = () => {
    const arrList: string[] = []
    // set去重
    const setArr = Array.from(new Set(arr))
    arrList.push('set去重=>' + setArr)
    //indexOf去重
    const indexOfArr = arr.filter((item, key, narr) => narr.indexOf(item) === key)
    arrList.push('indexOf去重=>' + indexOfArr)
    console.log(clearArr(arr));
    setNewArrList(arrList)
  }
  return (
    <>
      <Paragraph copyable>原数组 : const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a']</Paragraph>
      <Title level={4}>数组去重 <Button onClick={() => repetition()}>点击</Button></Title>
      {newArrList.map(item => <Paragraph ellipsis key={item}>{item}</Paragraph>)}

    </>

  )
}
export default Interview