import React from 'react'
import Style from './style.module.scss';
const Css3 = () => {
  return (
    <div style={{ position: 'relative', height: 10000 }}>
      <h1>animation+@keyframes 动画</h1>
      <div className={Style.keyframes}>animation: name duration timing-function delay iteration-count direction fill-mode play-state;</div>
      <h1> box-shadow 盒子阴影</h1>
      <div className={Style.shadow}>shadow </div>
      <h1> grid 栅格布局</h1>
      <div className={Style.grid}>
        <div><p>栅格布局1</p></div>
        <div><p>栅格布局2</p></div>
        <div><p>栅格布局3</p></div>
      </div>
      <h1> box-shadow 媒体查询</h1>
      <h1>transform 转换</h1>
      <div className={Style.transform}> transform: translate(50px, 30px) rotate(5deg) scale(1.3, 1.2);</div>

    </div>
  )
}
export default Css3