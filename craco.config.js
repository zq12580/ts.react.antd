const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            // '@ant-prefix': 'xh',
            '@primary-color': '#7CA4DE', // 全局主色
            '@text-color': '#000', // 主文本色
            '@layout-header-padding': '0px',//header的padding
            // '@layout-trigger-height': ' 64 px',
            '@menu-item-height': '40px',//侧导航栏中的高度
            '@table-header-sort-bg': '#EEF2F5',//table头背景色
            '@table-row-hover-bg': '#D8E7FA',//table触摸色
            '@link-color': ' #1890ff', // 链接色
            '@success-color': ' #52c41a', // 成功色
            '@warning-color': ' #faad14', // 警告色
            '@error-color': ' #f5222d', // 错误色
            '@font-size - base': ' 14px', // 主字号
            '@heading-color': ' rgba(0, 0, 0, 0.85)', // 标题色
            '@text-color - secondary': ' rgba(0, 0, 0, 0.45)', // 次文本色
            '@disabled-color': ' rgba(0, 0, 0, 0.25)', // 失效色
            '@border-radius - base': ' 4px', // 组件/浮层圆角
            '@border-color - base': ' #d9d9d9', // 边框色
            '@box-shadow - base': ' 0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};