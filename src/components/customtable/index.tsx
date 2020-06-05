import React, { useState } from 'react'
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import { ColGroupDef, ColDef, GridReadyEvent, CellClickedEvent, CellDoubleClickedEvent, CellContextMenuEvent, GridApi, ColumnApi, ExcelExportParams } from 'ag-grid-community';
import './style.scss';
import { Empty, Button } from 'antd';

const CustomTable: React.FC<Props> = (props) => {
  const { columnDefs, rowData, rowSelection } = props
  const [gridApi, setGridApi] = useState<GridApi>()
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>()

  // 组件api
  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api)
    setGridColumnApi(params.columnApi)
  }
  // 默认列定义
  const defaultColDef = {
    minWidth: 100,//最小宽
    flex: 1,//填充网格的剩余空白空间时使用
    resizable: true,//设置为true允许调整列的大小。
    sortable: true,//列上排序
    suppressMovable: false,//拖动
  }
  // 导出
  const exportExcel = () => {
    gridApi?.exportDataAsCsv({})
  }
  return (
    <div style={{ height: 700 }} className="ag-theme-balham">
      <Button onClick={() => exportExcel()}>导出表格CSV</Button>
      <AgGridReact
        columnDefs={columnDefs}//列定义一
        rowData={rowData}//数据
        animateRows={true}//动画
        disableStaticMarkup={true}//组件上的方法将被调用两次，一次用于预渲染，一次用于实际组件创建 但会存在闪烁 设置这个属性后 闪烁问题解决 性能会稍差些
        suppressColumnVirtualisation={true}//是否关闭列的虚拟化
        unSortIcon={true}//是否显示未排序的图标
        noRowsOverlayComponentFramework={() => <Empty />}
        rowSelection={rowSelection}//行选中 'single' | 'multiple'
        onGridReady={onGridReady}//api方法
        defaultColDef={defaultColDef}//默认列定义
        suppressRowClickSelection={true}//点击不选中复选框
        suppressDragLeaveHidesColumns={true}//禁止拖动离开隐藏列

      >
        {/* 列定义二*/}
        {/* {columnDefs.map((item, key) => {
          return (
            <AgGridColumn
              key={key}
              field={item.field}//列数据
              headerName={item.headerName}//列名
              width={item.width}//宽
              minWidth={item.minWidth}//最小宽 
              maxWidth={item.maxWidth}//最大宽
              pinned={item.pinned}//将一列固定到一侧
              hide={item.hide}//是否隐藏
              headerCheckboxSelection={rowSelection === 'multiple' && !!item.checkboxSelection}//头部是否有多选
              checkboxSelection={item.checkboxSelection}//是否有选择复选框
              suppressSizeToFit={item.suppressSizeToFit}//是否禁止自动调节大小
              resizable={!item.resizable}//是否禁止伸缩
              sortable={!item.sortable}//是否列sort排序
              filter={!item.filter}//是否列过滤
              cellStyle={item.cellStyle || {}}//设置样式=========================??
              cellClass={item.cellClass || []}//设置类名=========================??
              cellClassRules={item.cellClassRules || {}}//自定义规则=========================??
              suppressMovable={item.suppressMovable}
              onCellClicked={(event: CellClickedEvent) => console.log('单击单元格时调用的回调=>', event)}//单击单元格时调用的回调。
              onCellDoubleClicked={(event: CellDoubleClickedEvent) => console.log('双击单元格时调用的回调=>', event)}//双击单元格时调用的回调。
              onCellContextMenu={(event: CellContextMenuEvent) => console.log('右键单击单元格时调用的回调=>', event)}//右键单击单元格时调用的回调。
            />
          )
        })} */}
      </AgGridReact>
    </div >
  )
}

export default CustomTable

// 数据类型
interface Props {
  columnDefs: (ColDef)[];//表头
  rowData: any[];//数据
  rowSelection?: 'single' | 'multiple';//单选多选
}