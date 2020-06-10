import React from 'react'
import { Donut, Line, Liquid, Waterfall } from '@ant-design/charts';

const Chart = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其它',
      value: 5,
    },
  ];
  // 环图
  const cyclic = {
    forceFit: true,
    title: {
      visible: true,
      text: '环图-指标卡',
    },
    description: {
      visible: true,
      text: '环图指标卡能够代替tooltip\uFF0C在环图中心挖空部分显示各分类的详细信息\u3002',
    },
    radius: 0.8,
    padding: 'auto',
    data,
    angleField: 'value',
    colorField: 'type',
    statistic: { visible: true },
  };
  // 折线图
  const broken = {
    title: {
      visible: true,
      text: '带数据点的折线图',
    },
    description: {
      visible: true,
      text: '将折线图上的每一个数据点显示出来\uFF0C作为辅助阅读\u3002',
    },
    forceFit: true,
    padding: 'auto',
    data,
    xField: 'type',
    yField: 'value',
    point: { visible: true },
    label: {
      visible: true,
      type: 'point',
    },
  };
  // 水波图
  const wave = {
    title: {
      visible: true,
      text: '水波图',
    },
    min: 0,
    max: 10000,
    value: 5639,
  };
  // 混合图
  const columnar = {
    data,
    title: {
      visible: true,
      text: '每月收支情况（瀑布图）',
    },
    forceFit: true,
    padding: 'auto',
    xField: 'type',
    yField: 'value',
    meta: {
      type: {
        alias: '类别',
      },
      value: {
        alias: '金额',
      },
    },
  };
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ width: '50%' }}><Donut {...cyclic} /></div>
      <div style={{ width: '50%' }}><Line {...broken} /></div>
      <div style={{ width: '50%' }}><Liquid {...wave} /></div>
      <div style={{ width: '50%' }}><Waterfall {...columnar} /></div>
    </div>
  )
}
export default Chart
