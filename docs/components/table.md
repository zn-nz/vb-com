#

## 基本使用

<preview path="../demos/table/table-1.vue" title="基本使用" description=" "></preview>

## 组件 API【其他更多参照 el-table】

### Attributes 属性

| 参数            | 说明                     | 类型     | 可选值 | 默认值                           |
| --------------- | ------------------------ | -------- | ------ | -------------------------------- |
| tableQuery      | 页码条件                 | Object   |        | \{ pageIndex: 1, pageSize: 20 \} |
| data            | 表格数据                 | Array    |        | []                               |
| summaryData     | 统计合计数据             | Array    |        | []                               |
| total           | 数据总数                 | Number   |        | 0                                |
| height          |                          |          |        |                                  |
| showIndex       | 是否显示序号列           | Boolean  |        | false                            |
| showSelect      | 是否显示 checkbox        | Boolean  |        | false                            |
| selectDisabled  | 行选项 checkbox 禁用条件 | Function |        |                                  |
| headSelect      | 全选按钮是否是表头上     | Boolean  |        | false                            |
| hideDftCheckAll | 是否默认全选             | Boolean  |        | true                             |
| showP           | 是否显示页码             | Boolean  |        | true                             |
| showBatchDel    | 是否显示批量删除         | Boolean  |        | false                            |
| loading         | 加载状态                 | Boolean  |        | false                            |
| customEmpty     | 是否显示自定义空状态样式 | Boolean  |        | true                             |

### Methods 方法

| 方法名         | 说明         | 参数 | 返回值 |
| -------------- | ------------ | ---- | ------ |
| handleCheckAll | 切换全选状态 |      |        |

### Events 事件

| 事件名              | 说明               | 参数               | 返回值 |
| ------------------- | ------------------ | ------------------ | ------ |
| handleSizeChange    | 参照 el-pagination |                    |        |
| handleCurrentChange | 参照 el-pagination |                    |        |
| handleBatchDel      | 批量删除           | 选中的行组成的数组 |        |
| handleSeleted       | 批量选择           | 选中的行组成的数组 |        |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
| ------ | ---- | ---- |
|        |      |      |
