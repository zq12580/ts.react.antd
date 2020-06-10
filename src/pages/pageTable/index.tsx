import React, { useState, useEffect } from 'react'
import { GET_TABLE, POST_TABLE } from '../../api';
import CustomTable from "../../components/customtable";
const PageTable = () => {
  useEffect(() => {
    requestData()
  }, [])
  const [rowData, setRowData] = useState<any>([])
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "编码",
      field: "id",
      width: 160, //宽
      pinned: "left",//将一列固定到一侧
      checkboxSelection: true,//打开选择框
      suppressSizeToFit: true,//禁止自动调节大小
      resizable: false,//禁止伸缩
      sortable: true,//是否列sort排序
      suppressMovable: true,//是否禁止拖动
      cellStyle: { background: '#ccc' },//css样式
      cellClass: (info: any) => info.value <= 10 ? ['yellow'] : [],//class设置
      cellClassRules: {
        'red': (info: any) => info.value > 10 && info.value <= 20,
        'green': (info: any) => info.value > 20,
      }
    },
    { headerName: "标题", field: "title" },
    { headerName: "内容", field: "body" },
    { headerName: "userId", field: "userId", }
  ])


  const requestData = async () => {
    const resData = await GET_TABLE()
    setRowData(resData);
    // const resData2 = await POST_TABLE()
    // console.log('resData2=>', resData2);
  }




  return (
    <div>
      <CustomTable
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection={'multiple'}
      />
    </div>
  )
}
export default PageTable