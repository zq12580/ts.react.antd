import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridReadyEvent, GridApi, SelectionChangedEvent, CellDoubleClickedEvent } from 'ag-grid-community';
import './style.scss';
import { Empty, Spin, Dropdown, Menu } from 'antd';


const CustomTable: React.FC<Props> = (props) => {
  const { columnDefs, rowData, rowSelection, onSelectionChanged, onCellDoubleClicked, loading } = props
  const [gridApi, setGridApi] = useState<GridApi>()

  // 组件api
  const onGridReady = (params: GridReadyEvent) => {
    setGridApi(params.api)
  }
  // 默认列定义
  const defaultColDef = {
    minWidth: 100,//最小宽
    flex: 1,//填充网格的剩余空白空间时使用
    resizable: true,//设置为true允许调整列的大小。
    sortable: true,//列上排序
    suppressMovable: false,//是否禁止拖动
  }
  // 自定义右键菜单
  const menu = (
    <Menu style={{ width: 200 }}>
      <Menu.Item key="1">粘贴</Menu.Item>
      <Menu.Item key="2">表格刷新</Menu.Item>
    </Menu>
  )
  return (
    <Spin spinning={loading || false}>
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <div style={{ height: 'calc(100vh - 120px)' }} className="ag-theme-balham">
          <AgGridReact
            columnDefs={columnDefs}//列定义一
            rowData={rowData}//数据
            animateRows={true}//动画
            disableStaticMarkup={true}//组件上的方法将被调用两次，一次用于预渲染，一次用于实际组件创建 但会存在闪烁 设置这个属性后 闪烁问题解决 性能会稍差些
            suppressColumnVirtualisation={true}//是否关闭列的虚拟化
            unSortIcon={true}//是否显示未排序的图标
            noRowsOverlayComponentFramework={() => <Empty />}
            rowSelection={rowSelection}//行选中 'single' | 'multiple'
            onSelectionChanged={onSelectionChanged}// 选中行改变
            onGridReady={onGridReady}//api方法
            defaultColDef={defaultColDef}//默认列定义
            suppressRowClickSelection={true}//点击不选中复选框
            suppressDragLeaveHidesColumns={true}//禁止拖动离开隐藏列
            onCellDoubleClicked={onCellDoubleClicked}
            localeText={{ page: "页", to: "至", of: "共" }}
            pagination={true}//分页
            paginationPageSize={30}//每页个数
          >
          </AgGridReact>
        </div >
      </Dropdown>
    </Spin>
  )
}

export default CustomTable

// 数据类型
interface Props {
  columnDefs: (ColDef)[];//表头
  rowData: any[];//数据
  rowSelection?: 'single' | 'multiple';//单选多选
  loading?: boolean;//加载中
  onSelectionChanged?: (event: SelectionChangedEvent) => void//选择框变化
  onCellDoubleClicked?: (event: CellDoubleClickedEvent) => void//双击单元格事件
}