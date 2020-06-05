import React, { useState, useEffect } from 'react'
import ImgCrop from 'antd-img-crop';
import Cropper from 'react-easy-crop'
import Zmage from 'react-zmage'
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, RcFile, UploadListType, ShowUploadListInterface } from 'antd/lib/upload/interface';
import { ExclamationCircleOutlined } from '@ant-design/icons';


function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const CustomUpload: React.FC<Props> = (props) => {
  const { fileData, listType, accept, action, data, disabled, fileNum, showUploadList, uploadBut, uploadCrop } = props
  const [fileList, setFileList] = useState<UploadFile[]>([])
  useEffect(() => {
    setFileList(fileData || [])
  }, [fileData])

  // 上传前
  const beforeUpload = (file: RcFile, FileList: RcFile[]) => {
    console.log(file);
    message.loading('上传中...', 0)
    return true
  }
  // 预览操作
  const onPreview = async (file: any) => {
    const imagePath: string = file.url || file.response.url || '';
    Zmage.browsing({ src: imagePath, backdrop: 'rgba(255, 255, 255, .3)' })
  };
  // 下载操作
  const onDownload = (file: UploadFile) => {
    console.log('下载=>', file);
  }

  // 移除操作
  const onRemove = (file: UploadFile) => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      onOk() {
        const newFileList = fileList.filter(item => item !== file)
        setFileList(newFileList);
      },
    });
    return false
  }

  // 文件上传状态
  const onChange = (info: UploadChangeParam) => {
    const { status } = info.file
    if (status === 'uploading') {
      console.log('上传中=>', info);
      setFileList(info.fileList)
    }
    if (status === "error") {
      console.log('错误=>', info);
      message.destroy()
    }
    if (status === "removed") {
      console.log('移除=>', info);
      setFileList(info.fileList)
    }
    if (status === "done") {
      console.log('结束=>', info);
      setFileList(info.fileList)
      message.destroy()
    }
  }
  // 判断上传按钮
  const judgeBut = () => {
    if (uploadBut) {
      return uploadBut
    } else {
      return <PlusOutlined />
    }
  }
  // 上传组件
  const judgeCrop = (<Upload
    fileList={fileList}
    action={action}
    accept={accept}
    listType={listType}
    data={data}
    disabled={disabled}
    showUploadList={showUploadList}
    onChange={onChange}
    beforeUpload={beforeUpload}
    onPreview={onPreview}
    onRemove={onRemove}
    onDownload={onDownload}
  >
    {fileList.length < (fileNum || 10) ? judgeBut() : null}
  </Upload>)
  return (
    uploadCrop ? (
      <ImgCrop
        aspect={200 / 200}
        zoom={true}
        rotate={true}
        grid={true}
      >
        {judgeCrop}
      </ImgCrop>) : (judgeCrop)
  )
}

export default CustomUpload


// 数据类型
interface Props {
  action: string;//上传地址
  accept?: string;//接受上传的文件类型
  fileData?: UploadFile[];//数据
  listType?: UploadListType;//基本样式
  data?: object | ((file: UploadFile) => object);//上传所需额外参数或返回上传额外参数的方法
  disabled?: boolean;//是否禁用
  multiple?: boolean;//是否支持多个文件上传
  fileNum?: number;//限制图片上传个数
  showUploadList?: boolean | ShowUploadListInterface;//是否展示文件列表
  uploadBut?: React.ReactNode;//上传按钮
  uploadCrop?: boolean;//是否剪切
}