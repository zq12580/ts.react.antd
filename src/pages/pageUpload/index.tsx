import React from 'react'

import CustomUpload from "../../components/customupload";
import { Button } from 'antd';
const PageUpload = () => {
  return (
    <div>
      <p>上传图片</p>
      <CustomUpload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        accept='image/*'
        multiple={true}
        fileData={[{
          size: 0,
          type: '',
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'http://zmage.caldis.me/imgSet/childsDream/demo.jpg',
        }]}
      />
      <p>上传头像</p>
      <CustomUpload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileNum={1}
        accept='.png'
        uploadCrop={true}
      />

      <p>上传文件</p>
      <CustomUpload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='text'
        accept='file/*'
        uploadBut={<Button type='primary'>上传文件</Button>}
      />
    </div>
  )
}
export default PageUpload