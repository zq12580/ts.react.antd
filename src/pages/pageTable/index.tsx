import React from 'react'
import CustomTable from "../../components/customtable";
import useTable from "./action";
import { useSelector } from "react-redux";

const PageTable = () => {
  const { onTableSelect } = useTable()
  const { tableList } = useSelector((state: any) => state.tableData)
  const columnDefs = [
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
  ]
  return (
    <div>
      <CustomTable
        columnDefs={columnDefs}
        rowData={tableList}
        rowSelection={'single'}
        onSelectionChanged={onTableSelect}
      />
    </div>
  )
}
export default PageTable