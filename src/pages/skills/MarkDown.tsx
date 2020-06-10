import React from 'react'
const pageMd = () => {
  return (
    <div>
      <div># 这是一级标题</div>
      <div>## 这是二级标题</div>
      <div>### 这是三级标题</div>
      <div>#### 这是四级标题</div>
      <div>##### 这是五级标题</div>
      <div>###### 这是六级标题</div>
      <div>- 无序列表-</div>
      <div>+ 无序列表+</div>
      <div>* 无序列表*</div>
      <div>1. 有序列表</div>
      <div>2. 有序列表</div>
      <div> **这是加粗的文字**</div>
      <div> *这是倾斜的文字*</div>
      <div> ***这是斜体加粗的文字***</div>
      <div> ~~这是加删除线的文字~~</div>
      <div>引用 >||>>||>>></div>
      <div>分割线---||***</div>
      <div>[超链接](http:/baidu.com)</div>
      <div>![图片](http://zmage.caldis.me/imgSet/childsDream/demo.jpg)</div>
      <div> 表格</div>
      <div>| 表头 | 表头 | 表头 |</div>
      <div>| --- | --- | --- |</div>
      <div>|第一行|第一行|第一行|</div>
      <div>|第二行|第二行|第二行|</div>
      <div>|第三行|第三行|第三行|</div>
      <div># </div>
      <div>代码 ``</div>
      <div>代码块``` ```</div>
      <h1>md转为html</h1>
      <p> npm install -g i5ting_toc</p>
      <p> i5ting_toc -f MarkDown.md</p>
    </div>
  )
}

export default pageMd