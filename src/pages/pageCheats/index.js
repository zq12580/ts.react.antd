import React from 'react'

const PageCheats = () => {
  return (
    <>
      <h1>跨域</h1>
      <h2>通过jsonp跨域</h2>
      <p>script标签的src还是img标签的src，或者说link标签的href他们没有被通源策略所限制</p>
      <p>jsonp缺点：只能实现get一种请求。</p>
      <h2>document.domain + iframe跨域</h2>
      <h2>location.hash + iframe</h2>
      <h2>window.name + iframe跨域</h2>
      <h2>postMessage跨域</h2>
      <h2>跨域资源共享（CORS）</h2>
      <h2>nginx代理跨域</h2>
      <h2>nodejs中间件代理跨域</h2>
      <h2>WebSocket协议跨域</h2>
    </>
  )
}
export default PageCheats