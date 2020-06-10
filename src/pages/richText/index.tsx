import React, { useState } from 'react'
import CustomEditor from "../../components/customeditor";

const RichText = () => {
  const [editVal, setEditVal] = useState('<p>hellow zq</p>')
  // 
  const onChange = (info: string) => {
    setEditVal(info);
  }

  return (
    <div>
      <CustomEditor
        dataSource={editVal}
        handChange={onChange}
      />
      <div style={{ color: '#7CA4DE', height: 300 }}>{editVal}</div>
    </div>
  )
}
export default RichText