import React, { useEffect } from 'react'
import { Typography } from 'antd';
import { clearArr, clearArrObj, sortArr } from "../../tools/packWay";
const { Title, Paragraph } = Typography;

const Interview = () => {
  const arr: any[] = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a']
  const arrObj: any[] = [
    { a: '1', b: '2' },
    { a: '3', b: '4' },
    { a: '1', b: '5' }
  ]
  useEffect(() => {
    console.log('数组去重:', clearArr(arr));
    console.log('数组对象去重:', clearArrObj(arrObj, 'a'));
    console.log('数组排序:', sortArr([9, 8, 5, 6]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      <div style={{ width: '50%' }}>
        <Title level={4}>设置Localstorage:<Paragraph copyable>setLocalstorage()</Paragraph></Title>
        <Title level={4}>设置Localstorage:<Paragraph copyable>getLocalstorage()</Paragraph></Title>
        <Title level={4}>清楚Localstorage:<Paragraph copyable>delLocalStorage()</Paragraph></Title>
        <Title level={4}>数组去重:<Paragraph copyable>clearArr()</Paragraph></Title>
        <Title level={4}>数组对象去重:<Paragraph copyable>clearArrObj()</Paragraph></Title>
        <Title level={4}>数组排序:<Paragraph copyable>sortArr()</Paragraph></Title>
      </div>
      <div style={{ width: '50%' }}>
        <Title level={4}>去除字符串两端空格:<Paragraph copyable>string.trim()|trimStart()|trimLeft()|trimEnd()|trimRight()</Paragraph></Title>
        <Title level={4}>数组展平:<Paragraph copyable>arr.flat(展平层级)</Paragraph></Title>
        <Title level={4}>'??'={">"}只会识别null和undefined;'a?.b'会返回undefind</Title>
      </div>
      <div style={{ width: '50%' }}>
        <Title level={4}>校验设局类型</Title>
        <Title level={4}> <Paragraph copyable>typeof(数据)</Paragraph></Title>
        <p>用于检验简单数据类型除去null，null很引用数据都会返回object</p>
        <Title level={4}><Paragraph copyable>数据 instanceof 类型</Paragraph></Title>
        <p>无法判断基础数据类型和function 主要用于引用类型Array和Object校验</p>
        <Title level={4}><Paragraph copyable>数据.constructor===类型</Paragraph></Title>
        <p>null和undefined没有该方法，该方法容易被更改</p>
      </div>
      <div>
        <Title level={4}>转为字符串</Title>
        <p>String('数据');//可以转换所有数据类型</p>
        <p>数据.toString();//null和undefined无法转换;</p>
        <p>arr.join('分隔符')</p>
        <p>隐式转换=》 '+' 拼接 或 模板字符串 //会先转为字符串再进行拼接</p>
        <Title level={4}>转为数字</Title>
        <p>Number('数据');//会把所有的转为数字；如不是数字会为NAN</p>
        <p>parseInt('数据');//会把数字转化出来为整数 若第一个不是数字 就回NAN</p>
        <p>parseFloat('数据');//和上面相似 但会把浮点数也转化</p>
        <p>隐式转换=》 +'数据'或'数据'-</p>
        <Title level={4}>转为布尔值</Title>
        <p>Boolean();//可以转化所有</p>
        <p>！取反</p>
        <p>''/undefined/NAN/0 都为false</p>
        <Title level={4}>对象转为数组</Title>
        <p>Object.values(Obj);//对象的值为数组</p>
        <p>Object.keys(Obj);//对象的键为数组</p>
        <p> Object.entries(Obj);//对象的键为数组和Object.fromEntries(arr)相互转换</p>
        <Title level={4}>数组转为对象</Title>
        <p>Object.assign(arr)</p>
        <p>{'{...arr}'}</p>
        <p>Object.fromEntries(arr)//数组转对象 和Object.entries(Obj)相互转换</p>
        <Title level={4}>字符串转为数组</Title>
        <p>字符串.split(分隔符)</p>


      </div>


    </div>

  )
}
export default Interview