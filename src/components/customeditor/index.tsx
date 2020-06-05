import React, { useState, useEffect } from 'react'
import BraftEditor, { EditorState, ControlType, ExtendControlType } from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Upload, Button } from 'antd';


const CustomEditor: React.FC<Props> = (props) => {
  const [editorState, seteditorState] = useState<EditorState>();
  const [editVal, setEditVal] = useState<string>('')
  useEffect(() => {
    seteditorState(BraftEditor.createEditorState('<p>hellow zq</p>'));
  }, [])
  // 数据赋值
  const onChange = (editorState: EditorState) => {
    seteditorState(editorState)
    setEditVal(editorState.toHTML());
  }
  //内置控件
  const controls: ControlType[] = [
    { key: 'bold', text: <b>加粗</b> },
    'italic', 'underline', 'separator', 'link', 'separator', 'media'
  ]
  //扩展控件
  const extendControls: ExtendControlType[] = [
    { key: 'custom-button', type: 'button', text: '按钮控件', onClick: () => alert(editorState.toHTML()) },
    {
      key: 'custom-dropdown', type: 'dropdown', text: '下拉控件',
      component: <div style={{ color: '#fff' }}>哈哈哈</div>
    },
    {
      key: 'custom-modal', type: 'modal', text: '模态框控件', modal: {
        id: 'my-moda-1', title: '控件标题',
        children: (<img src="https://margox.cn/wp-content/uploads/2016/10/FA157E13E8B77E6E11290E9DF4C5ED7D-480x359.jpg" />)
      }
    },
    {
      key: 'antd-uploader',
      type: 'component',
      component: (
        <Upload
          accept="image/*"
          showUploadList={false}
          customRequest={(info) => {
            console.log(info);
          }}
        >
          <button type="button" className="control-item button upload-button" data-title="插入图片">
            哈哈哈
          </button>
        </Upload>
      )
    }
  ]
  return (
    <div className="editor-wrapper">
      <BraftEditor
        value={editorState}
        onChange={onChange}
        controls={controls}//内置控件
        extendControls={extendControls}//扩展控件
        contentStyle={{ height: 300, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
      />
      <div style={{ color: '#7CA4DE', height: 300 }}>{editVal}</div>
    </div>
  )
}

export default CustomEditor

// 数据类型
interface Props {

}